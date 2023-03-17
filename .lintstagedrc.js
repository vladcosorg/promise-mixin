module.exports = {
  '*': ['npm run fix:eslint --', 'npm run fix:prettier --'],
  '**/*.ts?(x)': [() => 'npm run lint:tsc', 'vitest related --run'],
}
