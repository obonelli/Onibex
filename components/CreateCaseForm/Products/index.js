import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import styles from "./styles";
import { Table, TableWrapper, Row } from "react-native-table-component";

const tableHead = ["Item No.", "Description", "Quantify", "Case type", ""];
const tableData = [];

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
              <Table>
                <Row data={tableHead} />
              </Table>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Products;
