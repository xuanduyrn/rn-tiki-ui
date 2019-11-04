import React from 'react';
import styled from 'styled-components';
import {Image} from 'react-native';
import {List, ListItem, Text, Left, Body, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconOrder from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';
import {
  itemsListOrder,
  itemInformation,
  itemWatch,
  itemsEdow,
  itemsSupport,
  itemsNetwork,
} from './items';

import AppStyles from '../../config/styles';

const UserProfile = () => {
  return (
    <WrapperContainer>
      <HeaderNavigation cart={true} headerName="Cá nhân" />
      <WrapperContent>
        <WrapperAccount>
          <LeftAccount>
            <Image
              source={require('../../../assets/images/avatar-user.png')}
              style={{width: 50, height: 50}}
            />
          </LeftAccount>
          <BodyAccount>
            <TextName numberOfLines={1}>Phạm Xuân Duy</TextName>
            <TextSmall numberOfLines={1}>Tài khoản Facebook</TextSmall>
            <TextSmall numberOfLines={1}>Thành viên từ: 28/03/2017</TextSmall>
          </BodyAccount>
          <RightAccount>
            <Ionicons
              name="ios-arrow-forward"
              size={20}
              style={{color: AppStyles.colors.lightBlueTiki}}
            />
          </RightAccount>
        </WrapperAccount>

        <WrapperList>
          {itemsNetwork.map(item => (
            <ListItem icon key={item.id}>
              <Left>
                <Ionicons
                  name={item.icon}
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Left>
              <Body>
                <WrapperTitle>{item.title}</WrapperTitle>
              </Body>
              <Right>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Right>
            </ListItem>
          ))}
        </WrapperList>
        <WrapperList>
          {itemsListOrder.map(item => (
            <ListItem icon key={item.id}>
              <Left>
                <IconOrder
                  name={item.icon}
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Left>
              <Body>
                <WrapperTitle>{item.title}</WrapperTitle>
              </Body>
              <Right>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Right>
            </ListItem>
          ))}
        </WrapperList>
        <WrapperList>
          {itemInformation.map(item => (
            <ListItem icon key={item.id}>
              <Left>
                <EvilIcons
                  name={item.icon}
                  size={25}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Left>
              <Body>
                <WrapperTitle>{item.title}</WrapperTitle>
              </Body>
              <Right>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Right>
            </ListItem>
          ))}
        </WrapperList>
        <WrapperList>
          {itemWatch.map(item => (
            <ListItem icon key={item.id}>
              <Left>
                <EvilIcons
                  name={item.icon}
                  size={25}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Left>
              <Body>
                <WrapperTitle>{item.title}</WrapperTitle>
              </Body>
              <Right>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Right>
            </ListItem>
          ))}
        </WrapperList>
        <WrapperList>
          {itemsEdow.map(item => (
            <ListItem icon key={item.id}>
              <Body>
                {item.id === 2 ? (
                  <WrapperTitle>
                    {item.title}:{' '}
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      1800 - 6963
                    </Text>{' '}
                    (Miễn phí)
                  </WrapperTitle>
                ) : (
                  <WrapperTitle>{item.title}</WrapperTitle>
                )}
              </Body>
              <Right>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Right>
            </ListItem>
          ))}
        </WrapperList>
        <WrapperList>
          {itemsSupport.map(item => (
            <ListItem icon key={item.id}>
              <Left>
                <SimpleLineIcons
                  name={item.icon}
                  size={25}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Left>
              <Body>
                <WrapperTitle>{item.title}</WrapperTitle>
              </Body>
              <Right>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  style={{color: AppStyles.colors.lightBlack}}
                />
              </Right>
            </ListItem>
          ))}
        </WrapperList>
        <ButtonLogOut>
          <Text style={{color: AppStyles.colors.lightBlueTiki}}>Đăng xuất</Text>
        </ButtonLogOut>
      </WrapperContent>
    </WrapperContainer>
  );
};

export default UserProfile;

const WrapperContainer = styled.View`
  flex: 1px;
`;

const WrapperAccount = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 70px;
  background-color: ${AppStyles.colors.white};
`;

const LeftAccount = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

const BodyAccount = styled.View`
  width: 67%;
  justify-content: center;
  flex-direction: column;
`;

const RightAccount = styled.View`
  width: 13%;
  justify-content: center;
  align-items: center;
`;

const WrapperContent = styled.ScrollView`
  flex: 1px;
  background-color: #eeeeee;
`;
const WrapperList = styled(List)`
  background-color: #fff;
  margin-top: 10px;
`;

const WrapperTitle = styled.Text`
  font-size: 14px;
  font-family: ${AppStyles.fonts.primaryRegular};
  color: ${AppStyles.colors.lightBlack};
`;

const ButtonLogOut = styled.TouchableOpacity`
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: ${AppStyles.colors.white};
  border-width: 1px;
  border-color: ${AppStyles.colors.lightBlueTiki};
  margin-left: 5%;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const TextName = styled(Text)`
  font-size: 16px;
  color: ${AppStyles.colors.black};
  font-family: ${AppStyles.fonts.primaryRegular};
`;
const TextSmall = styled(Text)`
  font-size: 13px;
  color: #848484;
  font-family: ${AppStyles.fonts.primaryRegular};
`;
