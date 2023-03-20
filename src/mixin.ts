// eslint-disable-next-line unicorn/prefer-top-level-await,@typescript-eslint/no-empty-function,@typescript-eslint/no-unsafe-assignment
const nativePromisePrototype: Promise<unknown> = (async () => {})().constructor
  .prototype
const descriptors = ['then', 'catch', 'finally'].map((property) => [
  property,
  Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property),
]) as Array<[string, TypedPropertyDescriptor<() => Promise<unknown>>]>
// eslint-disable-next-line no-use-before-define
type MixinPromise<PromiseValue, Mixin extends object> = AugmentedPromise<
  PromiseValue,
  Mixin
> &
  Mixin

interface AugmentedPromise<T, O extends object> extends Promise<T> {
  then: <TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => PromiseLike<TResult1> | TResult1)
      | null
      | undefined,
    onrejected?:
      | ((reason: any) => PromiseLike<TResult2> | TResult2)
      | null
      | undefined,
  ) => MixinPromise<TResult1 | TResult2, O>

  catch: <TResult = never>(
    onrejected?:
      | ((reason: any) => PromiseLike<TResult> | TResult)
      | null
      | undefined,
  ) => AugmentedPromise<T | TResult, O>
  finally: (onfinally?: (() => void) | null | undefined) => MixinPromise<T, O>
}

function bindPromiseMethods<T, P extends Promise<T>, O extends object>(
  promise: P,
  object: O,
): MixinPromise<T, O> {
  for (const [property, descriptor] of descriptors) {
    if (!descriptor.value) {
      continue
    }

    Reflect.defineProperty(object, property, {
      ...descriptor,
      value: descriptor.value.bind(promise),
    })
  }
  return object as MixinPromise<T, O>
}

export function createPromiseMixin<T, P extends Promise<T>, O extends object>(
  promise: P,
  object: O,
): MixinPromise<T, O> {
  function mixinPromise(
    ...promiseArguments: ConstructorParameters<PromiseConstructor>
  ): MixinPromise<T, O> {
    return bindPromiseMethods(
      Reflect.construct(Promise, promiseArguments, mixinPromise) as P,
      object,
    )
  }

  Object.setPrototypeOf(mixinPromise.prototype, Promise.prototype)
  Object.setPrototypeOf(mixinPromise, Promise)

  Object.setPrototypeOf(
    promise,
    Object.create(mixinPromise.prototype as object) as object,
  )
  return bindPromiseMethods(promise, object)
}
