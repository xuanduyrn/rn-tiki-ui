import React from 'react';
import {Image} from 'react-native';
import moment from 'moment';
import {Button} from 'native-base';
import styled from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';
import {dataNotifications} from '../../mock-data/notifications';
import AppStyles from '../../config/styles';

const Tabs = [
  {type: 1, icon: 'home', isActive: true},
  {type: 2, icon: 'history', isActive: false},
  {type: 3, icon: 'decagram', isActive: false},
];

const Notifications = () => {
  const [itemTabs, setTabs] = React.useState(Tabs || []);
  const [dataNotify, setDataNotify] = React.useState(dataNotifications || []);

  const setFilterTabs = tab => {
    const arr = itemTabs.map(item => {
      if (item.type === tab.type) {
        return {...item, isActive: true};
      }
      return {...item, isActive: false};
    });
    setTabs(arr);
    const newRecords =
      tab.type !== 1
        ? dataNotifications.filter(f => f.type === tab.type)
        : dataNotifications;
    setDataNotify(newRecords);
  };

  return (
    <WrapperContainer>
      <HeaderNavigation cart={true} headerName="Thông báo" />
      <WrapperContent>
        <TabsContainer>
          {itemTabs.map(tab => (
            <ButtonFilterTabs
              transparent
              key={tab.type}
              style={tab.isActive ? btnTabs : null}
              onPress={() => setFilterTabs(tab)}>
              <MaterialCommunityIcons
                name={tab.icon}
                size={25}
                style={{color: AppStyles.colors.grey}}
              />
            </ButtonFilterTabs>
          ))}
        </TabsContainer>
        <TabsContents>
          {dataNotify.map(item => (
            <List>
              <ListItem>
                <Left>
                  <Image source={item.icon} style={{width: 40, height: 40}} />
                </Left>
                <Right>
                  <TextTitle numberOfLines={2}>{item.title}</TextTitle>
                  <TextSmall style={{fontSize: 12}}>
                    {moment(new Date(item.date)).format('DD/MM/YYYY')}
                  </TextSmall>
                </Right>
              </ListItem>
              <TextDesc numberOfLines={4}>{item.desc}</TextDesc>
              <Divider />
            </List>
          ))}
        </TabsContents>
      </WrapperContent>
    </WrapperContainer>
  );
};

export default Notifications;

const WrapperContainer = styled.View`
  flex: 1px;
`;

const WrapperContent = styled.View`
  flex: 1px;
  background-color: ${AppStyles.colors.white};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TabsContainer = styled.View`
  flex: 0.1;
  background-color: ${AppStyles.colors.LIGHT_GRAY};
  height: 100%;
  border-style: solid;
  border-right-width: 1px;
  border-right-color: #eaeaea;
  flex-direction: column;
  align-items: center;
`;

const ButtonFilterTabs = styled(Button)`
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #e4e4e4;
  width: 100%;
`;

const TabsContents = styled.ScrollView`
  flex: 0.9;
  background-color: ${AppStyles.colors.white};
  height: 100%;
`;

const List = styled.View`
  flex-direction: column;
`;

const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Left = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

const Right = styled.View`
  width: 80%;
  justify-content: center;
  flex-direction: column;
`;

const TextSmall = styled.Text`
  color: #848484;
  font-family: ${AppStyles.fonts.primaryRegular};
`;

const TextTitle = styled.Text`
  color: ${AppStyles.colors.black};
  font-family: ${AppStyles.fonts.primaryRegular};
  font-size: 16px;
`;

const Divider = styled.View`
  width: 95%;
  height: 1px;
  background-color: #e7e7e9;
  margin-left: 5%;
  margin-top: 10px;
`;

const TextDesc = styled.Text`
  color: #848484;
  font-family: ${AppStyles.fonts.primaryRegular};
  font-size: 14px;
  color: #848484;
  margin-top: 5px;
  margin-left: 5%;
`;

const btnTabs = {
  backgroundColor: AppStyles.colors.white,
  borderLeftWidth: 1,
  borderLeftColor: AppStyles.colors.lightBlueTiki,
};
