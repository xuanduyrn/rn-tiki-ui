import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {List, ListItem, Text} from 'native-base';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';
import {product} from '../../mock-data/category';
import AppStyles from '../../config/styles';

const Search = ({navigation}) => {
  const [dataProduct, setDataProduct] = React.useState(product);
  const [searchText, setSearchProduct] = React.useState('');
  const search = text => {
    setSearchProduct(text);
    if (text) {
      var arrFilter = product.filter(x => {
        return x.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setDataProduct(arrFilter);
    } else {
      setDataProduct(product);
    }
  };
  return (
    <WrapperContainer>
      <HeaderNavigation
        onPressGoBack={() => navigation.goBack()}
        onChangeText={text => search(text)}
        back={true}
        cart={false}
        placeholder="Sản phẩm, thương hiệu..."
        onTouchStart={() => navigation.navigate('Search')}
      />
      {searchText.length <= 0 ? (
        <WrapperContent>
          <ViewHost>
            <IconHost size={25} name="show-chart" />
            <TextSmall>Từ khóa hot</TextSmall>
          </ViewHost>
          <Suggestions>
            {product.slice(0, 8).map(product => (
              <Chip key={product.id} onPress={() => navigation.navigate('DetailProduct')}>
                <TextSmall>{product.title}</TextSmall>
              </Chip>
            ))}
          </Suggestions>
        </WrapperContent>
      ) : (
        <ScrollView>
          <List>
            {dataProduct.length > 0 ? (
              dataProduct.slice(0, 5).map(item => (
                <ListItem
                  key={item.id}
                  style={{justifyContent: 'space-between'}}
                  onPress={() => navigation.navigate('DetailProduct')}>
                  <Text numberOfLines={1} style={{width: '90%'}}>{item.title}</Text>
                  <Feather
                    name="arrow-up-left"
                    size={20}
                    color={AppStyles.colors.lightGrey}
                  />
                </ListItem>
              ))
            ) : (
              <TextSmall style={{textAlign: 'center', marginTop: 10}}>
                Không tìm thấy sản phẩm
              </TextSmall>
            )}
          </List>
        </ScrollView>
      )}
    </WrapperContainer>
  );
};

export default Search;

const WrapperContainer = styled.View`
  flex: 1px;
`;

const WrapperContent = styled.View`
  flex-direction: column;
  flex: 1px;
  background-color: #eeeeee;
`;

const ViewHost = styled.View`
  background-color: ${AppStyles.colors.white};
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const Suggestions = styled.View`
  background-color: ${AppStyles.colors.white};
  height: 130px;
  flex-wrap: wrap;
`;

const Chip = styled.TouchableOpacity`
  height: 30px;
  width: auto;
  background: #eeeeee;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px;
`;

const TextSmall = styled.Text`
  font-size: 13px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
`;

const IconHost = styled(MaterialIcons)`
  background-color: ${AppStyles.colors.ERROR};
  border-radius: 12.5px;
  color: ${AppStyles.colors.white};
  margin-right: 10px;
`;
