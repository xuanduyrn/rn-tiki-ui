import React from 'react';
import styled from 'styled-components';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';

const DetailProduct = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderNavigation
        onPressGoBack={() => navigation.goBack()}
        cart={true}
        headerName="Chi tiết sản phẩm"
        back={true}
      />
    </WrapperContainer>
  );
};

export default DetailProduct;

const WrapperContainer = styled.View`
  flex: 1px;
`;
