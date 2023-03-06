import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../view/Login';
import Register from '../view/Register';
import {NewPassword} from '../view/NewPassword';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {Tabs} from './ButtomTabs';
import Loader from '../components/common/Loader';

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
        //headerShown: false,
      }}>
      {status == 'auth' ? (
        <>
          {/*Rutas Privadas */}
          <Stack.Screen name="Tabs" component={Tabs} />
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
