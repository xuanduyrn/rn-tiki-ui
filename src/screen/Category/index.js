import React from 'react';
import styled from 'styled-components';
import {Image, ScrollView} from 'react-native';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';
import AppStyles from '../../config/styles';

import {productCategory} from '../../mock-data/category';

const Category = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderNavigation cart={true} placeholder="Danh mục sản phẩm" />
      <ScrollView>
        <WrapperContent>
          {productCategory.map(product => (
            <WrapperCategory
              key={product.id}
              onPress={() => navigation.navigate('Search')}>
              <ProductCategory>
                <Image source={product.image} style={{width: 50, height: 50}} />
              </ProductCategory>
              <TextSmall>{product.title}</TextSmall>
            </WrapperCategory>
          ))}
        </WrapperContent>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Category;

const WrapperContainer = styled.View`
  flex: 1px;
`;

const WrapperContent = styled.View`
  flex: 1px;
  background-color: ${AppStyles.colors.white};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapperCategory = styled.TouchableOpacity`
  flex-direction: column;
  width: ${100 / 3}%;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const ProductCategory = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const TextSmall = styled.Text`
  font-size: 13px;
  color: #848484;
  font-family: ${AppStyles.fonts.primaryRegular};
  text-align: center;
`;
