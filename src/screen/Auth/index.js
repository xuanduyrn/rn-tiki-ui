import React from 'react';
import {ImageBackground} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Tab, Tabs} from 'native-base';
import styled from 'styled-components';

import AppStyles from '../../config/styles';

import Login from '../../components/Tabs/Login';
import Register from '../../components/Tabs/Register';

const Auth = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderBackground>
        <ImageBackground
          source={require('../../../assets/images/tiki.jpg')}
          style={{width: '100%', height: '100%'}}>
          <EvilIcons
            style={{padding: 5}}
            size={30}
            color="white"
            name="close"
            onPress={() => navigation.goBack()}
          />
        </ImageBackground>
      </HeaderBackground>
      <Tabs
        tabBarUnderlineStyle={{
          borderBottomColor: AppStyles.colors.yellow,
          borderBottomWidth: 2,
        }}>
        <Tab
          tabStyle={{backgroundColor: AppStyles.colors.white}}
          activeTabStyle={{backgroundColor: AppStyles.colors.white}}
          textStyle={{color: AppStyles.colors.grey}}
          activeTextStyle={{color: AppStyles.colors.black}}
          heading="Đăng nhập">
          <Login navigation={navigation} />
        </Tab>
        <Tab
          tabStyle={{backgroundColor: AppStyles.colors.white}}
          activeTabStyle={{backgroundColor: AppStyles.colors.white}}
          textStyle={{color: AppStyles.colors.grey}}
          activeTextStyle={{color: AppStyles.colors.black}}
          heading="Đăng ký">
          <Register navigation={navigation} />
        </Tab>
      </Tabs>
    </WrapperContainer>
  );
};

export default Auth;

const WrapperContainer = styled.View`
  flex: 1px;
`;

const HeaderBackground = styled.View`
  flex: 0.3;
`;
