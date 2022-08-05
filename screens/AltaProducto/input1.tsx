import * as React from 'react';
import { TextInput } from 'react-native-paper';

export const Input1 = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Cantidad volumen"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default Input1;