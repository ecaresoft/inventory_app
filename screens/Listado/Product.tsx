import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Text} from 'react-native';

const Productos = () => (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Producto</DataTable.Title>
          <DataTable.Title numeric>Cantidad</DataTable.Title>
          </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>12345678</DataTable.Cell>
          <Text>{`\t\t\t\t`} </Text>
          <DataTable.Cell>7</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>12345678</DataTable.Cell>
          <Text>{`\t\t\t\t`} </Text>
          <DataTable.Cell>4</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>12345678</DataTable.Cell>
          <Text>{`\t\t\t\t`} </Text>
          <DataTable.Cell>2</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>12345678</DataTable.Cell>
          <Text>{`\t\t\t\t`} </Text>
          <DataTable.Cell>5</DataTable.Cell>
        </DataTable.Row>
       </DataTable>  
);
export default Productos;