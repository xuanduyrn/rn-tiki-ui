import React from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components';
import {Input, Item} from 'native-base';
import IconSearch from 'react-native-vector-icons/Ionicons';
import IconCart from 'react-native-vector-icons/Feather';
import AppStyles from '../../config/styles';

const HeaderHomePage = ({onTouchStart}) => {
  return (
    <WrapperContainer>
      <Header>
        <View />
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{height: 20, width: 30}}
        />
        <IconCart
          size={25}
          name="shopping-cart"
          style={{color: AppStyles.colors.white, marginRight: 10}}
        />
      </Header>
      <ItemSearchGroup>
        <IconSearch
          size={20}
          active
          name="ios-search"
          style={{color: AppStyles.colors.lightGrey, padding: 2}}
        />
        <SearchInput
          placeholder={'Bạn cần tìm gì hôm nay'}
          onTouchStart={onTouchStart}
        />
      </ItemSearchGroup>
    </WrapperContainer>
  );
};

export default HeaderHomePage;

const WrapperContainer = styled.View`
  flex-direction: column;
  height: 90px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const ItemSearchGroup = styled(Item)`
  background-color: ${AppStyles.colors.white};
  height: 40px;
  padding: 5px;
  border-radius: 2px;
  margin-top: 10px;
  width: 95%;
`;

const SearchInput = styled(Input)`
  height: 40px;
  width: 100%;
`;
