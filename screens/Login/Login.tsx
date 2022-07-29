import React  from 'react';
import  Encabezado  from './Encabezado';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import PantallaInicio from './LoginScreen';
import { Appbar } from 'react-native-paper';





const Login = () => {
  return(
    
      <PaperProvider> 
        <Encabezado/>
        <PantallaInicio/>
      </PaperProvider>
  )
  
}
  

export default Login;