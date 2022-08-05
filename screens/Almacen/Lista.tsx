import * as React from 'react';
import { List } from 'react-native-paper';

export const ListaD = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="">
      <List.Accordion
        title="Localizador">
        <List.Item title="General" />
        <List.Item title="General2" />
      </List.Accordion>

      
    </List.Section>
  );
};

export default ListaD;