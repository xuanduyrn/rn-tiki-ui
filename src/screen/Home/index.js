import React from 'react';
import {Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Button, Card} from 'native-base';
import styled from 'styled-components';

import ChipProduct from '../../components/Chip/ChipProduct';
import FlashCard from '../../components/Cards/FlashCard';

import AppStyles from '../../config/styles';
import {categoryGrid} from '../../mock-data/HomeProduct';
import {productCategory, product} from '../../mock-data/category';

const {width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [dataProduct, setDataProduct] = React.useState(product || []);
  const [typeCategoryProduct, setCategoryType] = React.useState([
    {type: 0, title: 'Tất cả', isActive: true},
    ...productCategory,
  ]);

  const selectCategoryFlash = type => {
    //
    const record = typeCategoryProduct.map(x => {
      if (x.type === type) {
        return {...x, isActive: true};
      }
      return {...x, isActive: false};
    });
    setCategoryType(record);
    // Filter Flash
    const newDataProduct =
      type === 0 ? product : product.filter(x => x.typeOrder === type);
    setDataProduct(newDataProduct);
  };

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
      <WrapperDeal>
        <FlashDeal>
          <Image
            source={require('../../../assets/images/icon/flashdeal.png')}
            style={{width: 118, height: 21}}
          />
          <TextSmall style={{color: '#fff'}}>02: 44: 41</TextSmall>
          <TouchableOpacity>
            <TextSmall style={{color: '#fff'}}>Xem thêm</TextSmall>
          </TouchableOpacity>
        </FlashDeal>
        <FlashProduct>
          <WrapperChipProduct
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {typeCategoryProduct.map((item, index) => (
              <ChipProduct
                key={index}
                name={item.title}
                isActive={item.isActive}
                onPress={() => selectCategoryFlash(item.type)}
              />
            ))}
          </WrapperChipProduct>
          <WrapperCardProduct
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {dataProduct.length > 0 ? (
              dataProduct.map(item => (
                <FlashCard
                  key={item.id}
                  price={item.price}
                  flashName={item.flashName}
                  progress={item.progress}
                  imageProduct={item.image}
                />
              ))
            ) : (
              <TextSmall>{'Không tìm thấy sản phẩm'}</TextSmall>
            )}
          </WrapperCardProduct>
        </FlashProduct>
      </WrapperDeal>
    </WrapperContainer>
  );
};

export default Home;

const WrapperContainer = styled.View`
  flex: 1px;
  background-color: #014fa7;
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

const WrapperDeal = styled.View`
  flex-direction: column;
`;

const FlashDeal = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
`;

const FlashProduct = styled(Card)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 220px;
  width: ${width};
  margin-left: 0px;
  border-radius: 5px;
`;

const WrapperChipProduct = styled.ScrollView`
  flex-direction: row;
`;
const WrapperCardProduct = styled.ScrollView`
  flex-direction: row;
`;
