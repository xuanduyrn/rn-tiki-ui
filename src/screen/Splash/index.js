import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AppAction} from '../../navigation/app-navigation';

const Splash = ({navigation}) => {
  const gotoHome = () => {
    let resetAction = AppAction.getResetAction('MainScreen');
    navigation.dispatch(resetAction);
  };
  useEffect(() => {
    SplashScreen.hide();
    gotoHome();
  }, [gotoHome]);
  return null;
};

export default Splash;
