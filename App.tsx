import React from 'react';
import { StatusBar } from 'react-native';
import Background from './src/components/Background/Background';
import Router from './src/Routers/Router';

export default function App() {
  return (
    <Background>
      
      <StatusBar 
        barStyle="light-content"        // dark-content, light-content, default - COR DOS ÍCONES
        backgroundColor="transparent"   // COR DE FUNDO
        translucent                     // TRANSPARÊNCIA
      />

      <Router />

    </Background>
  );
}