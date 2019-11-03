import React from 'react';
import {StatusBar, View, Platform} from 'react-native';

const AppStatusBar = ({backgroundColor, ...props}: Props) => {
  const height = Platform.OS === 'ios' ? 24 : 24;

  return (
    <View style={{height}}>
      <StatusBar {...props} />
    </View>
  );
};

export default AppStatusBar;
