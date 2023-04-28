import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#537FE7',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    paddingEnd: 10,
  },
  position:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  Button: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  describe: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button2: {
    backgroundColor: '#537FE7',
    textDecorationColor: 'white',
    borderRadius: 100,
  },
});
