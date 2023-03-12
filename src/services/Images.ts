import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const Galery = async (image: string[], onChange: Function) => {
  try {
    await launchImageLibrary(
      {mediaType: 'photo', selectionLimit: 4},
      (response: any) => {
        let imageCopy: string[] = image ? image : [];
        imageCopy.push(response.assets[0].uri);
        onChange(imageCopy, 'image');
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const Camera = async (image: string[], onChange: Function) => {
  try {
    await launchCamera({mediaType: 'photo'}, (response: any) => {
      let imageCopy: string[] = image ? image : [];
      imageCopy.push(response.assets[0].uri);
      onChange(imageCopy, 'image');
    });
  } catch (error) {
    console.log(error);
  }
};
