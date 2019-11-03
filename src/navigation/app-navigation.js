import {createStackNavigator} from 'react-navigation-stack';
import {
  createAppContainer,
  NavigationActions,
  StackActions,
} from 'react-navigation';
//Auth Screen
//
import {YellowBox} from 'react-native';
import {BottomTabNavigation} from './BottomTabNavigation';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const BottomStack = createStackNavigator(
  {
    BottomTabNavigation: {
      screen: BottomTabNavigation,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const ModalStack = createStackNavigator({
  BottomStack: {
    screen: BottomStack,
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
      header: null,
    }),
  },
});

const RenCodeApp = createStackNavigator({
  MainScreen: {
    screen: ModalStack,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
});

export default createAppContainer(RenCodeApp);

export const AppAction = {
  getResetAction: screenName => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: screenName})],
    });
    return resetAction;
  },
};
