import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  title: {
    backgroundColor: '#537FE7',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  button2: {
    backgroundColor: '#537FE7',
    textDecorationColor: 'white',
    borderRadius: 100,
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
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 70,
    flexDirection: 'row',
  },
});
