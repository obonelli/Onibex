import React from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import styles from "./styles";

const StepHospital = (props) => {
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
            Surgey
          </Text>
          <View style={styles.row}>
            <Input containerStyle={{ width: "33%" }} label="Sugery Date" />
            <Input containerStyle={{ width: "33%" }} label="Sugery Time" />
            <Input containerStyle={{ width: "33%" }} label="Duration" />
          </View>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 17,
              fontWeight: "600",
              paddingBottom: 20,
            }}
          >
            Shipping
          </Text>
          <View style={styles.row}>
            <Input containerStyle={{ width: "33%" }} label="Ship Date" />
            <Input containerStyle={{ width: "33%" }} label="Due Date" />
            <Input containerStyle={{ width: "33%" }} label="Case Type" />
          </View>
          <View style={styles.row}>
            <Input containerStyle={{ width: "33%" }} label="Ship Method" />
            <Input containerStyle={{ width: "33%" }} label="Ship-to Address" />
            <Input
              containerStyle={{ width: "33%" }}
              label="New Ship-to Address"
            />
          </View>
        </View>
      </Wrapper>
    </>
  );
};

export default StepHospital;
