import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNImageToBase64 from 'react-native-image-base64';

export const Galery = async (image: string[], onChange: Function) => {
  try {
    await launchImageLibrary(
      {mediaType: 'photo', selectionLimit: 4,},
      async (response: any) => {
        let imageCopy: string[] = image ? image : [];

        // Convertir cada imagen a base64 antes de agregarla al array
        for (let asset of response.assets) {
          try {
            const base64 = await RNImageToBase64.getBase64String(asset.uri);
            const base64WithoutHeader = base64.substring(
              base64.indexOf(',') + 1,
            ); // Eliminar encabezado
            imageCopy.push(`data:${asset.type};base64,${base64WithoutHeader}`);
          } catch (error) {
            console.log(error);
          }
        }
        console.log(imageCopy);
        onChange(imageCopy, 'image');
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const Camera = async (image: string[], onChange: Function) => {
  try {
    await launchCamera({mediaType: 'photo'}, async (response: any) => {
      let imageCopy: string[] = image ? image : [];

      // Convertir cada imagen a base64 antes de agregarla al array
      for (let asset of response.assets) {
        try {
          const base64 = await RNImageToBase64.getBase64String(asset.uri);
          const base64WithoutHeader = base64.substring(base64.indexOf(',') + 1); // Eliminar encabezado
          imageCopy.push(`data:${asset.type};base64,${base64WithoutHeader}`);
        } catch (error) {
          console.log(error);
        }
      }
      console.log(imageCopy);
      onChange(imageCopy, 'image');
    });
  } catch (error) {
    console.log(error);
  }
};
