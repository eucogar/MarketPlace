import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const Galery = async () => {
  try {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export const Camera = async () => {
  try {
    await launchCamera({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      }
    });
  } catch (error) {
    console.log(error);
  }
};
