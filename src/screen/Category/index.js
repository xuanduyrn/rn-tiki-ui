import React from 'react';
import styled from 'styled-components';
import {ScrollView} from 'react-native';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';
import CategoryCard from '../../components/Cards/CategoryCard';

import AppStyles from '../../config/styles';
import {productCategory} from '../../mock-data/category';

const Category = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderNavigation
        cart={true}
        placeholder="Danh mục sản phẩm"
        onTouchStart={() => navigation.navigate('Search')}
      />
      <ScrollView>
        <WrapperContent>
          {productCategory.map(product => (
            <CategoryCard
              widthContainer={`${100 / 3}%`}
              widthCard={70}
              heightCard={70}
              imageStyle={{width: 50, height: 50}}
              numberOfLines={2}
              key={product.id}
              productImage={product.image}
              productTitle={product.title}
              onPress={() => navigation.navigate('Search')}
            />
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
  margin-bottom: 15px;
`;
