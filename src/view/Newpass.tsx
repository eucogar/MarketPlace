import React, {useContext, useState} from 'react';
import {Text, View, TextInput, Button, Alert, Image} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/Newpass';
import {UserLogin} from '../models/UserLogin';

export const newpass = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    user: {email, password},
    contrasena,
  } = useContext(AuthContext);
  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    if (password !== currentPassword) {
      Alert.alert('Error', 'La contraseña actual no coinciden');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert(
        'Error',
        'La nueva contraseña y la confirmación no coinciden',
      );
      return;
    }
    if (newPassword.length < 7) {
      Alert.alert(
        'Error',
        'La nueva contraseña debe tener al menos 7 caracteres',
      );
      return;
    }
    console.log(email);
    console.log(newPassword);
    try {
      const pass = await contrasena({
        email,
        password: newPassword,
      } as UserLogin);
      Alert.alert('Éxito', pass);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al actualizar la contraseña');
      console.error(error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/Logo.jpg')} />
        <Text style={styles.title}>Nueva Contraseña</Text>

        <TextInput
          style={styles.box}
          placeholder="Contraseña actual"
          secureTextEntry
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
        />
        <TextInput
          style={styles.box}
          placeholder="Nueva contraseña"
          secureTextEntry
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
        />
        <TextInput
          style={styles.box}
          placeholder="Confirmar nueva contraseña"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <Button title="Actualizar" onPress={handleChangePassword} />
      </View>
    </View>
  );
};
