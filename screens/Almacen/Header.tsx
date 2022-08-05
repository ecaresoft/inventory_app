import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';

export const Head = () => {
  const navigation = useNavigation();

  const _handleMore = () => console.log('Shown more');

  const _goBack = () => {
   navigation.goBack();
  };

  return (
    <Appbar.Header>
    <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Cirrus" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      
    </Appbar.Header>
  );
};

export default Head;