import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import styled from 'styled-components';
import Home from '../screen/Home';
import Category from '../screen/Category';
import Search from '../screen/Search';
import Notifications from '../screen/Notifications';
import UserProfile from '../screen/UserProfile';

import TabIcon from '../components/TabIcon';
import AppStyles from '../config/styles';

const HomeTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="home" tintColor={tintColor} type="home" />
    {/* <WrapperText>Trang chủ</WrapperText> */}
  </Wrapper>
);
const CategoryTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="grid" tintColor={tintColor} type="category" />
  </Wrapper>
);
const SearchTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="ios-search" tintColor={tintColor} type="search" />
  </Wrapper>
);
const NotificationTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon
      name="md-notifications"
      tintColor={tintColor}
      type="notifications"
    />
  </Wrapper>
);
const UserProfileTabIcon = ({tintColor}) => (
  <Wrapper>
    <TabIcon name="user" tintColor={tintColor} type="userProfile" />
  </Wrapper>
);

export const BottomTabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
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
        tabBarLabel: 'Thông báo',
      },
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        header: null,
        tabBarIcon: UserProfileTabIcon,
        tabBarLabel: 'Cá nhân',
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: AppStyles.colors.lightBlueTiki,
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
