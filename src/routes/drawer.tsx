import {createDrawerNavigator} from '@react-navigation/drawer';
import {settings} from '../view/Settings';
const Drawer = createDrawerNavigator();

export const MenuDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="settings" component={settings} />
    </Drawer.Navigator>
  );
};
