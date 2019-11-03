import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
//Home Screen
import Home from '../screen/Home';
//Style
import AppStyles from '../config/styles';

export const HomeTabNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: AppStyles.colors.accentColor,
      inactiveTintColor: AppStyles.colors.inactiveGreyColor,
      pressColor: AppStyles.colors.lightGreyCOlor,
      labelStyle: {
        fontWeight: 'bold',
        fontSize: Platform.OS === 'ios' ? 11 : 12,
        fontFamily: AppStyles.fonts.FONT_MEDIUM,
      },
      indicatorStyle: {
        backgroundColor: AppStyles.colors.accentColor,
      },
      style: {
        backgroundColor: 'white',
      },
    },
  },
);
