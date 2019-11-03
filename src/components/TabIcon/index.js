import React from 'react';
import Home from 'react-native-vector-icons/FontAwesome';
import UserProfile from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/Ionicons';
import Notifications from 'react-native-vector-icons/Ionicons';
import Category from 'react-native-vector-icons/Entypo';

const TabIcon = ({name, tintColor, type}) => {
  switch (type) {
    case 'home':
      return <Home name={name} size={20} color={tintColor} />;
    case 'category':
      return <Category name={name} size={20} color={tintColor} />;
    case 'search':
      return <Search name={name} size={20} color={tintColor} />;
    case 'notifications':
      return <Notifications name={name} size={20} color={tintColor} />;
    case 'userProfile':
      return <UserProfile name={name} size={20} color={tintColor} />;
  }
};

export default TabIcon;
