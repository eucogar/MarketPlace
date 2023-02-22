import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, VStack} from '@react-native-material/core';
import React, {useEffect, useReducer} from 'react';
import {useForm} from '../hooks/useForm';
import {UserRegister} from '../models/UserRegister';
import {
  InitialState,
  RegisterReducer,
} from '../store/user/register/userRegisterReducer';
import Steps from '../components/formSteps/Steps';
import {concatData} from '../store/user/register/actionsRegister';

export default function Register() {
  const {form, onChange} = useForm<UserRegister>({} as UserRegister);
  const {email, firtname, lastName, password, phone, city} = form;
  const [state, dispach] = useReducer(RegisterReducer, InitialState);
  const {step} = state;

  const Next = () => {
    dispach({
      type: concatData,
      payload: {
        user: form,
        step: step + 1,
        valid: false,
      },
    });
  };

  const Back = () => {
    dispach({
      type: concatData,
      payload: {
        user: form,
        step: step - 1,
        valid: false,
      },
    });
  };

  useEffect(() => {
    updateStep();
  }, [step]);

  const updateStep = () => {
    switch (step) {
      case 0: {
        return (
          <Steps
            onChange={onChange}
            text1={'Nombre'}
            text2={'Apellido'}
            key1={'firtname'}
            key2={'lastName'}
            value1={firtname}
            value2={lastName}
          />
        );
      }
      case 1: {
        return (
          <Steps
            onChange={onChange}
            text1={'Celular'}
            text2={'Ciudad'}
            key1={'phone'}
            key2={'city'}
            value1={phone}
            value2={city}
          />
        );
      }
      case 2: {
        return (
          <Steps
            onChange={onChange}
            text1={'Email'}
            text2={'Password'}
            key1={'email'}
            key2={'password'}
            value1={email}
            value2={password}
          />
        );
      }
    }
  };

  return (
    <>
      <VStack m={50} spacing={7}>
        <Text style={style.title}>Genial que estes aqui!</Text>
        <Text style={style.Text}>Por favor llena todos los campos </Text>
        <View style={style.container}>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>

        {updateStep()}

        <View style={style.Button}>
          {step !== 0 && (
            <Button variant="outlined" title="Atras" onPress={Back} />
          )}
          {step !== 2 ? (
            <Button title="Siguiente" onPress={Next} />
          ) : (
            <Button
              title="Enviar"
              onPress={() => {
                console.log('Seguardo');
              }}
            />
          )}
        </View>
      </VStack>
    </>
  );
}
const style = StyleSheet.create({
  title: {
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20,
    textAlign: 'center',
  },
  ButtonConfirmar: {
    position: 'absolute',
  },
  Button: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
