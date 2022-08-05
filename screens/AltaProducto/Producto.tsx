import * as React from 'react';
import {  Button, Card, Title} from 'react-native-paper';
import { Text} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import { Header_ } from './Header';
import { ListaDes } from './Lista';
import { Input1 } from './input1';
import { Input2 } from './input2';
import { useNavigation } from '@react-navigation/native';


const Producto = () => {

  const navigation = useNavigation();
  function navigateCaptureProduct() {
    navigation.navigate('CapturarProducto');
  }
  function navigateToList() {
    navigation.navigate('ListaInventario');
  }

  return(
  <PaperProvider> 
  <Card>
   <Header_/>
   
    <Card.Content>
    <Text>{`\n \n `} </Text>
      <Title>Actualizar Inventario</Title>
    </Card.Content>
   <ListaDes/>
   <Card.Actions>
      <Text>{`\t\t\t `} </Text>
      <Button icon="camera" mode="contained" onPress={navigateCaptureProduct}>
    Capturar
  </Button>
    </Card.Actions>
    
      <Text>{`\n `} </Text>
      <Input1/>
      <Input2/>
 
    <Text>{`\n `} </Text>
    <Card.Actions>
      <Text>{`\t `} </Text>
      <Button mode="contained" disabled onPress={() => console.log('Pressed')}>Cancelar</Button>
      <Text>{`\t `} </Text>
      <Button mode="contained" onPress={navigateToList}>Agregar a la lista</Button>
      
    </Card.Actions>
  </Card>
  </PaperProvider> 
)
}
export default Producto;