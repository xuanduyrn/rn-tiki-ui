import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import styled from 'styled-components';
import {HomeTabNavigation} from './HomeTabNavigation';
import Category from '../screen/Category';
import Search from '../screen/Search';
import Notifications from '../screen/Notifications';
import UserProfile from '../screen/UserProfile';

import TabIcon from '../components/TabIcon';
import AppStyles from '../config/styles';

const HomeTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="home" tintColor={tintColor} type="FontAwesomeIcon" />
    {/* <WrapperText>Trang chủ</WrapperText> */}
  </Wrapper>
);
const CategoryTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="history" tintColor={tintColor} type="MaterialIcons" />
  </Wrapper>
);
const SearchTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="ios-gift" tintColor={tintColor} type="IoniconsIcons" />
  </Wrapper>
);
const NotificationTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="infocirlce" tintColor={tintColor} type="AntDesignFAQ" />
  </Wrapper>
);
const UserProfileTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="infocirlce" tintColor={tintColor} type="AntDesignFAQ" />
  </Wrapper>
);

export const BottomTabNavigation = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeTabNavigation,
      navigationOptions: {
        header: null,
        tabBarIcon: HomeTabIcon,
        tabBarLabel: 'Trang chủ',
      },
    },

    Category: {
      screen: Category,
      navigationOptions: {
        header: null,
        tabBarIcon: CategoryTabIcon,
        tabBarLabel: 'Danh mục',
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null,
        tabBarIcon: SearchTabIcon,
        tabBarLabel: 'Tìm kiếm',
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        header: null,
        tabBarIcon: NotificationTabIcon,
        tabBarLabel: 'Hướng dẫn',
      },
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        header: null,
        tabBarIcon: UserProfileTabIcon,
        tabBarLabel: 'Hướng dẫn',
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: AppStyles.colors.primaryGradientStart,
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#fff',
      inactiveTintColor: AppStyles.colors.lightGreyColor,
      pressColor: '#7f8c8d',
      style: {
        borderTopColor: '#D9D8DB',
        borderTopWidth: 0.5,
      },
    },
  },
);

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;
