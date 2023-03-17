import { inspect } from 'util'
import util from 'util'

export function i(...data) {
  console.log(
    ...data.map((row) =>
      util.inspect(row, {
        showHidden: true,
        colors: true,
        showProxy: true,
        depth: 10,
      }),
    ),
  )
}
export function s() {
  console.log('------------------------------------------------')
  console.log('\n')
}
