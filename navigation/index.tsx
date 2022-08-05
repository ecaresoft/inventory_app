import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {Login, Encabezado} from '../screens/Login'
import { CapturarQR } from '../screens/CapturarQR';
import Almacen from '../screens/Almacen/Almacen';
import Producto from '../screens/AltaProducto/Producto';
import CodigoBarras from '../screens/CapturarProducto/CapturarProducto';
import Listado from '../screens/Listado/Listado';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ScannerQr" component={CapturarQR} options={{ headerShown: false }} />
      <Stack.Screen name="Localizador" component={Almacen} options={{ headerShown: false }} />
      <Stack.Screen name="AltaProducto" component={Producto} options={{ headerShown: false }} />
      <Stack.Screen name="CapturarProducto" component={CodigoBarras} options={{ headerShown: false }} />
      <Stack.Screen name="ListaInventario" component={Listado} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}