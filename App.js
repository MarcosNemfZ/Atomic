import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import Main from './src/screens/Main/Main';
import Formulario from "./src/screens/Formulario/Formulario"

export default function App() {
  const [main, setMain] = useState(true);
  const changeMain = () => setMain(!main)

  return (

    <PaperProvider>
      {!main ? (
                  <Formulario changeMain={changeMain} />
              ) : (
                     <Main changeMain={changeMain} />
              ) }
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
