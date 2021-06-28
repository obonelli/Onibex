import React, { useState } from 'react'
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import styles from "./styles";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const Products = (props) => {
  return (
    <>
      <Wrapper>
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
          <View style={styles.rowCustom}>            
            <View style={styles.columnFirst}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 17,
                fontWeight: "600",
                marginBottom: 0,
                paddingBottom: 20,
              }}
            >
            Add Products
          </Text>
              <Input containerStyle={{ width: "25%"}} label="Ship1" />
              <Input containerStyle={{ width: "25%"}} label="Due2" />
            </View>
            <View style={styles.columnSecond}>
              <Input containerStyle={{ width: "100%" }} label="Ship Date" />
              <Input containerStyle={{ width: "100%" }} label="Due Date" />
              <Input containerStyle={{ width: "100%" }} label="Case Type" />
            </View>
          </View>
        </View>
      </Wrapper>
    </>
  );
};

export default Products;
