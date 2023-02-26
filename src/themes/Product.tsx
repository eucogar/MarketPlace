import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },

  img: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
