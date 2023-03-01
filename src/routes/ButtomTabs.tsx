import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {registerProduct} from '../view/RegisterProduct';
import {settings} from '../view/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {MarketPlace} from '../view/MarketPlace';
import {Chat} from '../view/Chat';
import {useContext, useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {primaryBlue, secondaryWhite} from '../themes/_varibles';
import {AuthContext} from '../context/AuthContext';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from '@react-native-material/core';

const Tab = createBottomTabNavigator();
interface Props extends StackScreenProps<any, any> {}
export const Tabs = ({navigation}: Props) => {
  const {logOut} = useContext(AuthContext);
  const createTwoButtonAlert = () =>
    Alert.alert('Cerrar Session', 'Quieres Salir de tu cuenta?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: logOut},
    ]);
  const updateView = () => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <Button
          stylesText={{color: primaryBlue, fontWeight: 'bold'}}
          title={
            <Text>
              <Icon
                name="log-out-outline
"
                size={30}
                color="#900"
              />
            </Text>
          }
          onPress={createTwoButtonAlert}
        />
      ),
      title: 'Finansal',
      headerTitleStyle: {
        color: primaryBlue,
        fontWeight: '600',
      },
      headerStyle: {
        shadowColor: secondaryWhite,
      },
    });
  };
  useEffect(() => {
    updateView();
  }, []);
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: '#537FE7',
        style: {
          borderTopWidth: 1,
          elevation: 0,
          backgroundColor: '#537FE7',
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'MarketPlace':
              iconName = 'storefront-outline';
              break;
            case 'Chat':
              iconName = 'chatbubble-ellipses-outline';
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
          }

          // @ts-ignore
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{title: 'HOME'}}
        component={registerProduct}
      />
      <Tab.Screen
        name="MarketPlace"
        options={{title: 'MarketPlace'}}
        component={MarketPlace}
      />
      <Tab.Screen name="Chat" options={{title: 'Chat'}} component={Chat} />
      <Tab.Screen
        name="Settings"
        options={{title: 'SETTING'}}
        component={settings}
      />
    </Tab.Navigator>
  );
};
