import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'; 

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme, {} from './src/global/styles/theme';

//import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
//import { CategorySelect } from './src/screens/CategorySelect';

export default function App() {
  const [fontsLoaded] = useFonts({  
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  // Enquanto a aplicação não for carregada utilizamos esta função APPLoad para dar uma segurada 
  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    //Quem estiver dentro do contexto de ThemeProvider recebera as propriedades de Theme
    // o arquivo styled.d.ts serve para sobrescrever e fazer uma tipagem dos nossos styles globais
    <ThemeProvider theme={theme}>      
      <Register />
    </ThemeProvider>    
    //npm install @types/styled-components-react-native -D
    //instalar extenção vscode-styled-components 
    //color highlight
    //expo install expo-font @expo-google-fonts/poppins
    //expo install expo-app-loading

    //Biblioteca para trabalhar com proporções
    //import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

    //biblioteca top para trabalhar com icones quando usando expo
    //import {} from '@expo/vector-icons';

    //npm add react-native-iphone-x-helper

    //aprendi a trabalhar com o recurso de tela MODAL
    // vou aprender a trabalhar com REact Hook Form
      //Excelente para controlar os estados dos campos apenas no clique do botão de submeter o formulario
      // www.react-hook-form.com/get-started
  );
}

