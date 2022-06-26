module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // traz um coverage dos testes que foram cobridos
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  // infos para carregar antes de todas as configs do jest
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
