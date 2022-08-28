import React  from 'react';
import Encabezad from './Eencabezado';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import {Button, Card} from 'react-native-paper';
import { View, StyleSheet, Alert } from 'react-native';
import { Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarcodeScanner } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
})


const CapturarQR = () => {

  const navigation = useNavigation();
  function navigateTostorage() {
    navigation.navigate('Localizador');
  }

  async function logOut() {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Root');
  }

  return(
    
      <PaperProvider> 
        <Encabezad/>
        <BarcodeScanner />
        <View style={{padding: 10}}>
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Capturar QR 
          </Button>
          <Button mode="contained" onPress={logOut}>Cerrar sesion</Button>

        </View>
        <View style={styles.row}>
              <Button mode="contained" disabled onPress={() => console.log('Pressed')}>Cancelar</Button>
              <Button mode="contained" onPress={navigateTostorage}>Continuar</Button>
        </View>
      </PaperProvider>
  )
}
export default CapturarQR;