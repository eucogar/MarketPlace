import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {registerProduct} from '../view/RegisterProduct';
import {settings} from '../view/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {MarketPlace} from '../view/MarketPlace';
import {Chat} from '../view/Chat';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
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
              iconName = 'cart-outline';
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
