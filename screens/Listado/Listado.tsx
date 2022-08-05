import * as React from 'react';
import {  Button, Card, Title} from 'react-native-paper';
import { Text} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';
import Encabezad  from './Header';
import { List } from 'react-native-paper';
import Productos from './Product';

const Listado = () => (
  <PaperProvider> 
  <Card>
   <Encabezad/>
   
    <Card.Content>
    <Text>{`\n `} </Text>
      <Title>Lista de Productos</Title>
    </Card.Content>
   <Productos/>
   <Text>{`\n \n \n \n`} </Text>
    <Card.Actions>
      <Text>{`\t `} </Text>
      <Button mode="contained" disabled onPress={() => console.log('Pressed')}>Cancelar</Button>
      <Text>{`\t `} </Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>Continuar</Button>
    </Card.Actions>
  </Card>
  </PaperProvider> 
);

export default Listado;
