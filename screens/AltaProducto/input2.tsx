import * as React from 'react';
import { TextInput } from 'react-native-paper';

export const Input2 = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Cantidad mínima"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default Input2;