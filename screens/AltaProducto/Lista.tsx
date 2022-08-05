import * as React from 'react';
import { List } from 'react-native-paper';

export const ListaDes = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="">
      <List.Accordion
        title="Producto"
        >
        <List.Item title="Termómetro Digital" />
        <List.Item title="Ferula" />
        <List.Item title="Sonda Foley EST.SILICONIZ" />
      </List.Accordion>

      
    </List.Section>
  );
};

export default ListaDes;