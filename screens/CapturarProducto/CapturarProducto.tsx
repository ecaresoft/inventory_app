import React  from 'react';
import { Encabezad } from './Encabezado';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import {Button, Card} from 'react-native-paper';
import { View, StyleSheet, Alert } from 'react-native';
import { Text} from 'react-native';
import { BarcodeScanner } from '../../components';

const styles = StyleSheet.create({
  buttonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
})

const CodigoBarras = () => {
  
  return(
      <PaperProvider> 
        <Encabezad/>
        <BarcodeScanner /> 
        <View>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Capturar Producto
          </Button>
        </View>
        <View>
        <Text>{`\n\n\n\n\n\n\n\n`} </Text>
        </View>
        <View style={styles.buttonsWrapper}>
              <Button mode="contained" disabled onPress={() => console.log('Pressed')}>Cancelar</Button>
              <Button mode="contained" onPress={() => console.log('Pressed')}>Continuar</Button>
        </View>
      </PaperProvider>
  )
}
export default React.memo(CodigoBarras);