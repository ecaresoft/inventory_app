import { useNavigation } from '@react-navigation/native';
import * as React  from 'react';
import { SafeAreaView,View} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import loginStyle from './login.style';

// react hooks
const PantallaInicio= () =>{
  const [user, setUser] = React.useState<string>('Valor inicial');
  const navigation = useNavigation();

  function navigateToQr() {
    navigation.navigate('ScannerQr');
  }

  return(
    <SafeAreaView style={loginStyle.content}>
      <View style = {loginStyle.view}>
        <Card>
          <Card.Title title = "Inventario Móvil" titleStyle={loginStyle.CardTitle}></Card.Title>
          <Card.Content>
            <TextInput label="Usuario" onChangeText={setUser} value={user} ></TextInput>
            <TextInput label="Contraseña" secureTextEntry={true}></TextInput>
            <Button mode="contained" style={loginStyle.cardButton} onPress={navigateToQr}> Iniciar Sesion </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default PantallaInicio;

