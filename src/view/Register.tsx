import {Image, Text, View} from 'react-native';
import {Button, VStack} from '@react-native-material/core';
import React, {useEffect, useReducer} from 'react';
import {useForm} from '../hooks/useForm';
import {UserRegister} from '../models/UserRegister';
import {style} from '../themes/Register';
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
          <View>
            <View style={style.carga1}>
              <Text style={style.color}>1</Text>
              <Text style={style.color2}>2</Text>
              <Text style={style.color2}>3</Text>
            </View>
            <Steps
              onChange={onChange}
              text1={'Nombre'}
              text2={'Apellido'}
              key1={'firtname'}
              key2={'lastName'}
              value1={firtname}
              value2={lastName}
            />
          </View>
        );
      }
      case 1: {
        return (
          <View>
            <View style={style.carga1}>
              <Text style={style.color}>1</Text>
              <Text style={style.color}>2</Text>
              <Text style={style.color2}>3</Text>
            </View>
            <Steps
              onChange={onChange}
              text1={'Celular'}
              text2={'Ciudad'}
              key1={'phone'}
              key2={'city'}
              value1={phone}
              value2={city}
            />
          </View>
        );
      }
      case 2: {
        return (
          <View>
            <View style={style.carga1}>
              <Text style={style.color}>1</Text>
              <Text style={style.color}>2</Text>
              <Text style={style.color}>3</Text>
            </View>
            <Steps
              onChange={onChange}
              text1={'Email'}
              text2={'Password'}
              key1={'email'}
              key2={'password'}
              value1={email}
              value2={password}
            />
          </View>
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
            <Button
              variant="outlined"
              title="Atras"
              color="#537FE7"
              onPress={Back}
            />
          )}
          {step !== 2 ? (
            <Button
              title="Siguiente"
              tintColor="white"
              color="#537FE7"
              onPress={Next}
            />
          ) : (
            <Button
              title="Enviar"
              tintColor="white"
              color="#537FE7"
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

