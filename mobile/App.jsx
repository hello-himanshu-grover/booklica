/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainStack from './src/navigation/MainStack';
import { RootSiblingParent } from 'react-native-root-siblings';

import { darkTheme, lightTheme } from './src/theme/theme';


function App(){
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme


  return (
    <RootSiblingParent>
      <NavigationContainer>
          <PaperProvider theme={theme}>
            <MainStack/>
          </PaperProvider>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
