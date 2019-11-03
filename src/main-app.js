// @flow
import React, {Component} from 'react';
import {YellowBox, BackHandler} from 'react-native';
import {StyleProvider, Root} from 'native-base';
import styled, {ThemeProvider} from 'styled-components';
import AppStyles from './config/styles';
import {Container} from './constants/global-style';
import AppNavigation from './navigation/app-navigation';
import AppStatusBar from './components/status-bar';
//Theme Native base
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const theme = {
  colors: {...AppStyles.colors},
};

type Props = {};
class MainApp extends Component<Props> {
  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }

  backPressed = () => {
    return true;
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <ThemeProvider theme={theme}>
          <Container>
            <CustomStatusBar barStyle="default" translucent />
            <AppNavigation />
          </Container>
        </ThemeProvider>
      </StyleProvider>
    );
  }
}

const CustomStatusBar = styled(AppStatusBar).attrs({
  backgroundColor: AppStyles.colors.WHITE,
})``;

export default MainApp;
