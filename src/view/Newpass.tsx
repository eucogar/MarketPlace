import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/Newpass';
import {UserLogin} from '../models/UserLogin';

export const newpass = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {
    user: {email, password},
    contrasena,
  } = useContext(AuthContext);

  const isPasswordValid = password => {
    // Password regex pattern for at least one letter, one number, and one special character
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;

    return (
      password.length >= 7 &&
      password.length <= 21 &&
      passwordPattern.test(password)
    );
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    if (password !== currentPassword) {
      Alert.alert('Error', 'La contraseña actual no coincide');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert(
        'Error',
        'La nueva contraseña y la confirmación no coinciden',
      );
      return;
    }

    if (!isPasswordValid(newPassword)) {
      Alert.alert(
        'Error',
        'La nueva contraseña debe tener al menos una letra, un número y un carácter especial, y tener entre 8 y 20 caracteres',
      );
      return;
    }

    try {
      const pass = await contrasena({
        email,
        password: newPassword,
      } as UserLogin);
      Alert.alert('Éxito', 'Actualizacion exitosa');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al actualizar la contraseña');
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/Logo.jpg')} />
        <Text style={styles.title}>Nueva Contraseña</Text>

        <TextInput
          style={styles.box}
          placeholder="Contraseña actual"
          secureTextEntry={!showPassword}
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
        />
        <TextInput
          style={styles.box}
          placeholder="Nueva contraseña"
          secureTextEntry={!showPassword}
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
        />
        <TextInput
          style={styles.box}
          placeholder="Confirmar nueva contraseña"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />

        <TouchableOpacity
          style={{marginLeft: 150, marginBottom: 20}}
          onPress={togglePasswordVisibility}>
          <Text style={styles.togglePasswordText}>
            {showPassword ? 'Ocultar contraseñas' : 'Mostrar contraseñas'}
          </Text>
        </TouchableOpacity>

        <Button title="Actualizar" onPress={handleChangePassword} />
      </View>
    </View>
  );
};
