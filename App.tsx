import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './src/routes/ButtomTabs';
import {StackNavigator} from './src/routes/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
