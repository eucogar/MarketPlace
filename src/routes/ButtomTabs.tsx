import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {registerProduct} from '../view/RegisterProduct';
import {settings} from '../view/Settings';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={registerProduct} />
      <Tab.Screen name="Settings" component={settings} />
    </Tab.Navigator>
  );
};
