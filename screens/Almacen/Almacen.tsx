import * as React from 'react';
import {  Button, Card, Title} from 'react-native-paper';
import { Text} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import { Head } from './Header';
import { List } from 'react-native-paper';
import { ListaD } from './Lista';
import Navigation from '../../navigation';
import { useNavigation, useNavigationState } from '@react-navigation/native';




const Almacen = () => {
    const navigation=useNavigation();

    function navigatetoProduct(){
        navigation.navigate('AltaProducto')
    }

  return(
  <PaperProvider> 
  <Card>
   <Head/>
   
    <Card.Content>
    <Text>{`\n \n \n \n \n \n`} </Text>
      <Title>Seleccionar Almacén</Title>
      
    </Card.Content>
   <ListaD/>
   <Text>{`\n \n \n \n`} </Text>
    <Card.Actions>
      <Text>{`\t `} </Text>
      <Button mode="contained" disabled onPress={() => console.log('Pressed')}>Cancelar</Button>
      <Text>{`\t `} </Text>
      <Button mode="contained" onPress={navigatetoProduct}>Continuar</Button>
    </Card.Actions>
  </Card>
  </PaperProvider> 
  )
};

export default Almacen;