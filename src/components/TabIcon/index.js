import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignFAQ from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const TabIcon = ({name, tintColor, type}) => {
  switch (type) {
    case 'FontAwesomeIcon':
      return <FontAwesomeIcon name={name} size={20} color={tintColor} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={20} color={tintColor} />;
    case 'IoniconsIcons':
      return <IoniconsIcons name={name} size={20} color={tintColor} />;
    case 'AntDesignFAQ':
      return <AntDesignFAQ name={name} size={20} color={tintColor} />;
  }
};

export default TabIcon;
