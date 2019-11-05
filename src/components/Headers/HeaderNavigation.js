import React from 'react';
import styled from 'styled-components';
import {Button, Item, Input, Header, Body, Title} from 'native-base';
import IconSearch from 'react-native-vector-icons/Ionicons';
import IconCart from 'react-native-vector-icons/Feather';
import IconArrowBack from 'react-native-vector-icons/Ionicons';
import AppStyles from '../../config/styles';

const HeaderNavigation = ({
  back,
  headerName,
  cart,
  placeholder,
  onPressGoBack,
  onTouchStart,
  onPressCart,
}) => {
  return (
    <HeaderWrapper>
      {back ? (
        <Button
          transparent
          style={{width: 30, marginRight: 10}}
          onPress={onPressGoBack}>
          <IconArrowBack
            size={25}
            name="ios-arrow-back"
            style={{color: AppStyles.colors.white}}
          />
        </Button>
      ) : null}
      <Body>
        {headerName ? (
          <Title numberOfLines={1}>{headerName}</Title>
        ) : (
          <ItemSearchGroup>
            <IconSearch
              size={20}
              active
              name="ios-search"
              style={{color: AppStyles.colors.lightGrey, padding: 2}}
            />
            <SearchInput
              placeholder={placeholder}
              onTouchStart={onTouchStart}
            />
          </ItemSearchGroup>
        )}
      </Body>
      {cart ? (
        <Button
          transparent
          style={{width: 40, marginLeft: 10}}
          onPress={onPressCart}>
          <IconCart
            size={25}
            name="shopping-cart"
            style={{color: AppStyles.colors.white}}
          />
        </Button>
      ) : null}
    </HeaderWrapper>
  );
};

export default HeaderNavigation;

const HeaderWrapper = styled(Header)`
  background-color: ${AppStyles.colors.lightBlueTiki};
`;

const ItemSearchGroup = styled(Item)`
  background-color: ${AppStyles.colors.white};
  height: 40px;
  padding: 5px;
  border-radius: 2px;
`;

const SearchInput = styled(Input)`
  height: 40px;
  width: 100%;
`;
