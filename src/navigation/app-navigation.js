import {createStackNavigator} from 'react-navigation-stack';
import {
  createAppContainer,
  NavigationActions,
  StackActions,
} from 'react-navigation';
//Splash Screen
import SplashScreen from '../screen/Splash';
import Auth from '../screen/Auth';
import DetailProduct from '../screen/DetailProduct';
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

const TikiApp = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {gesturesEnabled: false, header: null},
  },
  MainScreen: {
    screen: ModalStack,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null,
    },
  },
  DetailProduct: {
    screen: DetailProduct,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(TikiApp);

export const AppAction = {
  getResetAction: screenName => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: screenName})],
    });
    return resetAction;
  },
};
