import React from 'react';
import styled from 'styled-components';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';

const Category = () => {
  return (
    <WrapperContainer>
      <HeaderNavigation cart={true} placeholder="Danh mục sản phẩm" />
    </WrapperContainer>
  );
};

export default Category;

const WrapperContainer = styled.View`
  flex: 1px;
`;
