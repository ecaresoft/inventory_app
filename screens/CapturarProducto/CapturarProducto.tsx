import React  from 'react';
import { Encabezad } from './Encabezado';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import {Button, Card} from 'react-native-paper';
import { View, StyleSheet, Alert } from 'react-native';
import { Text} from 'react-native';

const CodigoBarras = () => {
  return(
      <PaperProvider> 
        <Encabezad/>
        <Card.Cover source={{ uri: 'http://3.bp.blogspot.com/-egpiXyj_tYs/Ty5UqZS0JcI/AAAAAAAAACQ/I2043TfIZUw/s1600/Dibujoprofesor.jpg' }} />
 
 
        <View>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Capturar Producto
          </Button>
        </View>
        <View>
        <Text>{`\n\n\n\n\n\n\n\n`} </Text>

        </View>
        <hr/>
        <Card>
            <Card.Actions>
              
              <Text>{`\t`} </Text>
              <Button mode="contained" disabled onPress={() => console.log('Pressed')}>Cancelar</Button>
              <Text>{`\t `} </Text>
              <Button mode="contained" onPress={() => console.log('Pressed')}>Continuar</Button>
            </Card.Actions>
          </Card>
      </PaperProvider>
  )
}
export default CodigoBarras;