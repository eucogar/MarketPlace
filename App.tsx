import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/routes/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AppState>
          <PaperProvider>
            <StackNavigator />
          </PaperProvider>
        </AppState>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
