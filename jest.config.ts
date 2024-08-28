  
  import { JestConfigWithTsJest } from 'ts-jest';

  
  const config: JestConfigWithTsJest = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Update this line
  };

  export default config;
