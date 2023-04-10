import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {registerProduct} from '../view/RegisterProduct';
import {perfil} from '../view/Perfil';
import Icon from 'react-native-vector-icons/Ionicons';
import {MarketPlace} from '../view/MarketPlace';
import {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
interface Props extends StackScreenProps<any, any> {}
export const Tabs = ({navigation}: Props) => {
  const updateView = () => {
    navigation.setOptions({
      headerShown: false,
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
              iconName = 'cloud-upload';
              break;
            case 'MarketPlace':
              iconName = 'pricetags';
              break;
            case 'perfil':
              iconName = 'person-circle-outline';
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
        name="perfil"
        options={{title: 'perfil'}}
        component={perfil}
      />
    </Tab.Navigator>
  );
};
