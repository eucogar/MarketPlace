import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../view/Login';
import Register from '../view/Register';
import {NewPassword} from '../view/NewPassword';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {Tabs} from './ButtomTabs';
import Loader from '../components/common/Loader';
import {ListProduct} from '../view/ListProduct';
import {EditPerfil} from '../view/EditPerfil';
import {ViewProduct} from '../view/ViewProdutc';
import {EditProduct} from '../view/EditProduct';
import {newpass} from '../view/Newpass';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {status} = useContext(AuthContext);

  useEffect(() => {
    console.log(status);
  }, [status]);
  if (status === 'checking') {
    return <Loader />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}>
      {status == 'auth' ? (
        <>
          {/*Rutas Privadas */}
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name={'ListProduct'} component={ListProduct} />
          <Stack.Screen name={'EditPerfil'} component={EditPerfil} />
          <Stack.Screen name={'ViewProduct'} component={ViewProduct} />
          <Stack.Screen name={'EditProduct'} component={EditProduct} />
          <Stack.Screen name={'NewPass'} component={newpass} />
        </>
      ) : (
        <>
          {/*Rutas publicas */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
        </>
      )}
    </Stack.Navigator>
  );
};
