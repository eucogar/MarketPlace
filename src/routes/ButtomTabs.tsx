import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {registerProduct} from '../view/RegisterProduct';
import {settings} from '../view/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {MarketPlace} from '../view/MarketPlace';
import {useContext, useEffect} from 'react';
import {Alert, Text} from 'react-native';
import {primaryBlue, secondaryWhite} from '../themes/_varibles';
import {AuthContext} from '../context/AuthContext';
import {StackScreenProps} from '@react-navigation/stack';

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
        <Text onPress={createTwoButtonAlert} style={{padding: 10}}>
          <Icon name="log-out-outline" size={30} color="#537FE7" />
        </Text>
      ),
      title: 'MarketPlace',
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
              iconName = 'cube-outline';
              break;
            case 'MarketPlace':
              iconName = 'cart-outline';
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
        name="MarketPlace"
        options={{title: 'MarketPlace'}}
        component={MarketPlace}
      />
      <Tab.Screen
        name="Home"
        options={{title: 'Publicar'}}
        component={registerProduct}
      />
      <Tab.Screen
        name="Settings"
        options={{title: 'SETTING'}}
        component={settings}
      />
    </Tab.Navigator>
  );
};
