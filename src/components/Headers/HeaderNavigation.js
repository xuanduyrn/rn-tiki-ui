import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Left, Right, Button, Icon, Title} from 'native-base';

const HeaderNavigation = ({iconLeft, title, iconRight, onPress}) => {
  return (
    <View style={styles.topBarBg}>
      <Left>
        {iconLeft ? (
          <Button transparent onPress={onPress}>
            <Icon name={iconLeft} style={{color: 'white'}} />
          </Button>
        ) : null}
      </Left>
      <Title>{title}</Title>
      <Right>
        {iconRight ? (
          <Button transparent>
            <Icon name={iconRight} />
          </Button>
        ) : null}
      </Right>
    </View>
  );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
  topBarBg: {
    width: '100%',
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
