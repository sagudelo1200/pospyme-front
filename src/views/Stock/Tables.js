import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import InventoryTableRow from "components/Tables/InventoryTableRow.js";
import { inventoryTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "45px", md: "45px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Inventario
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Nombre
                </Th>
                <Th color="gray.400">Precio de compra</Th>
                <Th color="gray.400">Precio de venta</Th>
                <Th color="gray.400">Cantidad</Th>
                <Th color="gray.400">Estado</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {inventoryTableData.map((row) => {
                return (
                  <InventoryTableRow
                    photo_url={row.photo_url}
                    name={row.name}
                    sku={row.sku}
                    price_buy={row.price_buy}
                    price_sale={row.price_sale}
                    quantity={row.quantity}
                    status={row.status}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
