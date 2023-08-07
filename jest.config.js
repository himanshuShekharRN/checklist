module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest/setup.tsx',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-redux|@react-navigation|react-native-tab-view)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/jest/svgMock.tsx',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  notify: true,
  collectCoverage: true,
};
