// vite.config.ts

import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: ['tsconfig.development.json'],
    }),
  ],
  // clearScreen: true,
  // test: {
  //   deps: {
  //     interopDefault: true,
  //     inline: ['vitest-mock-process'],
  //   },
  //   clearMocks: true,
  //   globals: true,
  //   include: ['tests/**/*.test.ts'],
  // },
})
