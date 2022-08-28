import { useNavigation } from '@react-navigation/native';
import * as React  from 'react';
import { SafeAreaView,View} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import { api, services } from '../../utils';
import loginStyle from './login.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

// react hooks
const PantallaInicio= () =>{
  const [user, setUser] = React.useState<string>('usuario 1');
  const [password, setPassword] = React.useState<string>('');
  const navigation = useNavigation();

  function navigateToQr() {
    navigation.navigate('ScannerQr');
  }

  async function login() {
    try{
      const details = {
        'username':'ECS_MELIZONDO',
        'password': '0skz41hoh6' 
     };
      await AsyncStorage.setItem('token', JSON.stringify({token: 'x', user: user}));
      setTimeout(() => {
        navigateToQr();
      }, 1200);
      // const formBody = Object.entries(details).map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&')
      // fetch('http://44.237.243.120:6081/eCareSoftWeb/api/login', {
      //  method: 'POST',
      //  headers: {
      //   'Content-type': 'application/x-www-form-urlencoded'
      //  },
      //  body: formBody
      //  })
      //  .then(function(response){ 
      //  return response.json()})
      //  .then(function(data)
      //  {console.log(data)})
      // await AsyncStorage.setItem('token', JSON.stringify(data));

      //  .catch(error => console.error('Error:', error)); 
     //return;
    }catch(e){
      console.log(e)
    }
  }

  return(
    <SafeAreaView style={loginStyle.content}>
      <View style = {loginStyle.view}>
        <Card>
          <Card.Title title = "Inventario Móvil" titleStyle={loginStyle.CardTitle}></Card.Title>
          <Card.Content>
            <TextInput label="Usuario" onChangeText={setUser} value={user} ></TextInput>
            <TextInput label="Contraseña" onChangeText={setPassword} value={password} secureTextEntry={true}></TextInput>
            <Button mode="contained" style={loginStyle.cardButton} onPress={login}> Iniciar Sesion </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default PantallaInicio;

