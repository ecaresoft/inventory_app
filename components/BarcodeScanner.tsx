import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function MyScanner() {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    
    getBarCodeScannerPermissions();  
  }, []);

  const handleBarCodeScanned = ({ _type, data }) => {
    setScanned(true);
    alert(`Info: ${data}`);
  };

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    // <Modal style={styles.modal} visible>

    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Toca para escanear de Nuevo'} onPress={() => setScanned(false)} />}
    </View>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
  }
});

export default MyScanner;