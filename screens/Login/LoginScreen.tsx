import { useNavigation } from '@react-navigation/native';
import * as React  from 'react';
import { SafeAreaView,View} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import { api, services } from '../../utils';
import loginStyle from './login.style';

// react hooks
const PantallaInicio= () =>{
  const [user, setUser] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const navigation = useNavigation();

  function navigateToQr() {
    navigation.navigate('ScannerQr');
  }

  async function login() {
    const respuesta: any = await api('post', 'postLogin' , {
      username: 'ECS_MELIZONDO',
      password: '0skz41hoh6',
      extra: { "clientId": "10001032", "orgId": "10001450", "roleId": "10001464","estServId":"10001439"},
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    services.defaults.headers.common.Authorization = `Bearer ${respuesta.token}`;
    setTimeout(() => {
      navigateToQr();
    }, 1200);
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

