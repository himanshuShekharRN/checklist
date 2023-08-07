jest.mock('react-native-gesture-handler');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

// Mock the navigation object and its functions
export const mockNavigate = jest.fn();
export const mockOnPressButton = jest.fn();
export const useNavigation = () => ({
  navigate: mockNavigate,
  dispatch: jest.fn(),
  goBack: jest.fn(),
  navigation: {
    goBack: jest.fn(),
  },
});

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    createStackNavigator: jest.fn(),
    useNavigation: useNavigation,
    useRoute: () => ({
      params: {},
    }),
  };
});

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }) => children;
  return { KeyboardAwareScrollView };
});
