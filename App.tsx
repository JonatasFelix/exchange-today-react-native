import { StatusBar } from 'react-native';
import Background from './src/components/Background/Background';
import Header from './src/components/Header/Header';

import CotacaoScreen from './src/screens/CotacaoScreen/CotacaoScreen';


export default function App() {
  return (
    <Background>
      
      <StatusBar 
        barStyle="light-content"        // dark-content, light-content, default - COR DOS ÍCONES
        backgroundColor="transparent"   // COR DE FUNDO
        translucent                     // TRANSPARÊNCIA
      />
      
      <CotacaoScreen />

    </Background>
  );
}