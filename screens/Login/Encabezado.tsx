import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Encabezado = () => {


  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Content title="Cirrus" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Encabezado;