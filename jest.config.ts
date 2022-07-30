import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^styles(.*)$': '<rootDir>/__mocks__/styleMock.js',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '\\.tsx$': 'ts-jest',
  },
}

export default config
