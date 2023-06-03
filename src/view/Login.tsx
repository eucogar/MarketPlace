import {Image, Text, View, Alert, TouchableOpacity} from 'react-native';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/Login';
import {InputLabel} from '../components/InputLabel';
import {useForm} from '../hooks/useForm';
import {UserLogin} from '../models/UserLogin';
import {useContext} from 'react';
import * as Yup from 'yup';
import {AuthContext} from '../context/AuthContext';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const Login = ({navigation}: Props) => {
  const {form, onChange} = useForm<UserLogin>({} as UserLogin);
  const {email, password} = form;
  const [showPassword, setShowPassword] = useState(true);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {signIn} = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      await schema.validate(form, {abortEarly: false});
      signIn(form);
    } catch (error) {
      const errorMessage =
        // @ts-ignore
        error.inner.length > 0
          ? // @ts-ignore
            error.inner[0].message
          : 'Por favor, completa el formulario';
      Alert.alert('Error', errorMessage);
    }
  };

  const schema = Yup.object().shape({
    password: Yup.string()
      .required('La contraseña es requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(20, 'La contraseña debe tener maximo 20 caracteres'),
    email: Yup.string()
      .email('Ingrese un correo electrónico válido')
      .required('El correo electrónico es requerido')
      .min(6, 'el email debe tener minimo 6 caracteres')
      .max(50, 'el email debe tener maximo 50 caracteres')
      .test('dominio', 'El correo electrónico debe ser de Gmail', value => {
        if (value) {
          return value.endsWith('@gmail.com');
        }
        return false;
      }),
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
          secureTextEntry={showPassword}
          value={password}
          onChangeText={onChange}
          field={'password'}
        />

        <TouchableOpacity
          style={styles.eyeButton}
          onPress={handleTogglePasswordVisibility}>
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color={'gray'}
          />
        </TouchableOpacity>
        <View style={styles.Text}>
          <Button
            variant="text"
            title="Olvide mi contraseña"
            color={'gray'}
            onPress={() => navigation.navigate('NewPassword')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Inicar"
            color="#537FE7"
            tintColor="white"
            onPress={handleSubmit}
          />
          <Button
            onPress={() => navigation.navigate('Register')}
            variant="outlined"
            title="Registrar "
            color="#537FE7"
          />
        </View>
      </VStack>
    </>
  );
};
