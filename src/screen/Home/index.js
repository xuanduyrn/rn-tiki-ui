import React from 'react';
import {Image, Text, Dimensions} from 'react-native';
import {Button, Card} from 'native-base';
import styled from 'styled-components';
import AppStyles from '../../config/styles';

import {categoryGrid} from '../../mock-data/HomeProduct';

const {width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <WrapperContainer>
      <Text>Home</Text>
      <CategoryList>
        {categoryGrid.map((item, index) => (
          <ButtonCategory key={index} transparent>
            <Image source={item.icon} style={{width: 40, height: 40}} />
            <TextSmall>{item.name}</TextSmall>
          </ButtonCategory>
        ))}
      </CategoryList>
    </WrapperContainer>
  );
};

export default Home;

const WrapperContainer = styled.View`
  flex: 1px;
  background-color: #cad0d6;
`;

const CategoryList = styled(Card)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 80px;
  width: ${width};
  margin-left: 0px;
`;

const ButtonCategory = styled(Button)`
  flex-direction: column;
  margin-bottom: 20px;
`;

const TextSmall = styled.Text`
  font-size: 13px;
  font-family: ${AppStyles.fonts.primaryRegular};
`;

