import {createDrawerNavigator} from '@react-navigation/drawer';
import {perfil} from '../view/Perfil';
const Drawer = createDrawerNavigator();

export const MenuDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="settings" component={perfil} />
    </Drawer.Navigator>
  );
};
