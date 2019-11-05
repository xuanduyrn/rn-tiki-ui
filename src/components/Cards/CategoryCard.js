import React from 'react';
import styled from 'styled-components';
import {Image, View} from 'react-native';
import AppStyles from '../../config/styles';

const CategoryCard = ({
  onPress,
  productTitle,
  productImage,
  widthContainer,
  widthCard,
  heightCard,
  imageStyle,
  numberOfLines,
}) => {
  return (
    <WrapperCategory onPress={onPress} style={{width: widthContainer}}>
      <ProductCategory style={{width: widthCard, height: heightCard}}>
        <Image source={productImage} style={imageStyle} />
      </ProductCategory>
      <View style={{height: 20}}>
        <TextSmall numberOfLines={numberOfLines}>{productTitle}</TextSmall>
      </View>
    </WrapperCategory>
  );
};

export default CategoryCard;

const WrapperCategory = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const ProductCategory = styled.View`
  justify-content: center;
  align-items: center;
`;

const TextSmall = styled.Text`
  font-size: 13px;
  color: #848484;
  font-family: ${AppStyles.fonts.primaryRegular};
  text-align: center;
`;
