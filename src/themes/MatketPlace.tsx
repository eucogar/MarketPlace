import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#537FE7',
    paddingBottom: 20,
    width: '100%',
    height: 100,
    paddingLeft: 10,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  searchBar: {
    height: 40,
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  itemContainer: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    textAlign: 'center',
  },
  SuperContainer: {
    padding: 10,
  },
  Description: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
