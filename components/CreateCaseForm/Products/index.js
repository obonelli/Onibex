import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import styles from "./styles";
import { DataTable } from "react-native-paper";

const data = [
  { id: 1, title: "Conan the Barbarian", year: "1982" },
  { id: 1, title: "Conan the Barbarian", year: "1982" },
];
const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Year",
    selector: "year",
    sortable: true,
    right: true,
  },
];

const Products = (props) => {
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 17,
              fontWeight: "600",
              paddingBottom: 20,
            }}
          >
            Products
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ backgroundColor: "#fff", borderRadius: 8, width: "50%" }}
            >
              <Text>Add Products</Text>
              <Input containerStyle={{ width: "100%" }} label="Ship Date" />
              <Input containerStyle={{ width: "100%" }} label="Due Date" />
              <Input containerStyle={{ width: "100%" }} label="Case Type" />
            </View>

            <View style={{ width: "50%" }}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Item No.</DataTable.Title>
                  <DataTable.Title>Description</DataTable.Title>
                  <DataTable.Title>Quantity</DataTable.Title>
                  <DataTable.Title>Case type</DataTable.Title>
                  <DataTable.Title></DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>GAFXR</DataTable.Cell>
                  <DataTable.Cell>
                    Gorilla Ankle Fracture Kit. R3CON
                  </DataTable.Cell>
                  <DataTable.Cell>6.0</DataTable.Cell>
                  <DataTable.Cell>Agency</DataTable.Cell>
                  <DataTable.Cell numeric>X</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>GAFXR</DataTable.Cell>
                  <DataTable.Cell>
                    Gorilla Ankle Fracture Kit. R3CON
                  </DataTable.Cell>
                  <DataTable.Cell>6.0</DataTable.Cell>
                  <DataTable.Cell>Agency</DataTable.Cell>
                  <DataTable.Cell numeric>X</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>GAFXR</DataTable.Cell>
                  <DataTable.Cell>
                    Gorilla Ankle Fracture Kit. R3CON
                  </DataTable.Cell>
                  <DataTable.Cell>6.0</DataTable.Cell>
                  <DataTable.Cell>Agency</DataTable.Cell>
                  <DataTable.Cell numeric>X</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>GAFXR</DataTable.Cell>
                  <DataTable.Cell>
                    Gorilla Ankle Fracture Kit. R3CON
                  </DataTable.Cell>
                  <DataTable.Cell>6.0</DataTable.Cell>
                  <DataTable.Cell>Agency</DataTable.Cell>
                  <DataTable.Cell numeric>X</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>GAFXR</DataTable.Cell>
                  <DataTable.Cell>
                    Gorilla Ankle Fracture Kit. R3CON
                  </DataTable.Cell>
                  <DataTable.Cell>6.0</DataTable.Cell>
                  <DataTable.Cell>Agency</DataTable.Cell>
                  <DataTable.Cell numeric>X</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                  page={1}
                  numberOfPages={3}
                  onPageChange={(page) => {
                    console.log(page);
                  }}
                  label="1-2 of 6"
                />
              </DataTable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Products;
