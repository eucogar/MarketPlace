import {Image, Text, View, Alert} from 'react-native';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/Login';
import {InputLabel} from '../components/InputLabel';
import {useForm} from '../hooks/useForm';
import {UserLogin} from '../models/UserLogin';
import {useContext} from 'react';
import * as Yup from 'yup';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const Login = ({navigation}: Props) => {
  const {form, onChange} = useForm<UserLogin>({} as UserLogin);
  const {email, password} = form;

  const {signIn} = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      await schema.validate(form, {abortEarly: false});
      signIn(form);
    } catch (error) {
      const errorMessage =
        error.inner.length > 0
          ? error.inner[0].message
          : 'Por favor, completa el formulario';
      Alert.alert('Error', errorMessage);
    }
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('El email debe ser válido')
      .required('El email es requerido'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es requerida'),
  });

  return (
    <>
      <VStack m={50} spacing={7}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/Logo.jpg')} />
          <Text style={styles.title}>MARKETPLACE</Text>
        </View>
        <InputLabel
          placeholder={'Email'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={onChange}
          field={'email'}
        />
        <Spacer />
        <InputLabel
          placeholder={'Password'}
          secureTextEntry={true}
          value={password}
          onChangeText={onChange}
          field={'password'}
        />
        <View style={styles.Text}>
          <Button
            variant="text"
            title="OH! has olvidado tu contraseña?"
            color={'gray'}
            onPress={() => navigation.navigate('NewPassword')}
          />
        </View>
        <View style={styles.Button}>
          <Button
            title="Inicar sesion"
            color="#537FE7"
            tintColor="white"
            onPress={handleSubmit}
          />
          <Button
            onPress={() => navigation.navigate('Register')}
            variant="outlined"
            title="Registar "
            color="#537FE7"
          />
        </View>
      </VStack>
    </>
  );
};
