import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,                     // Avoiding imports of describe, it and expect
    setupFiles: ["jest-extended/all"], // Any setup you need in all test suites
    includeSource: ['./index.ts'],     // Tell Vitest where In-Source tests are located
    restoreMocks: true                 // Restore all mocks before each test
  },
})
