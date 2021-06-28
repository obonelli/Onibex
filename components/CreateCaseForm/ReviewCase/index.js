import React from "react";
import { View, Text ,TextInput} from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import styles from "./styles";

const ReviewCase = (props) => {
  return (
    <>
      <Wrapper>
        <View style={styles.container}>
          <Text
            style={{
              marginLeft: 0,
              fontSize: 18,
              fontWeight: "600",
              paddingBottom: 20,
              color: "#7db3ed",
            }}
          >
            Bone Graft Harvest System
          </Text>
          <Text
            style={{
              marginLeft: 0,
              fontSize: 16,
              fontWeight: "600",
              paddingBottom: 20,
              color: "#afafaf",
            }}
          >
            Reference: 456786546789
          </Text> 
          <View style={styles.rowCustom}>
            <Text 
            style={styles.QtyText}
            containerStyle={{ width: "33%" }}>Qty</Text>
            <Input 
            containerStyle={{ width: "16%" }}
            />
            <Button containerStyle={{ width: "16%" }} title="Add Item"/>
          </View>
          <Text
            style={{
              marginLeft: 0,
              fontSize: 16,
              fontWeight: "600",
              paddingBottom: 20,
            }}
          >
            Description
          </Text>
          <View style={styles.row}>
          <Text containerStyle={{ width: "100%" }}>The Bone Graft Haverst System was created to offer a means to effectively Harvest
          morselized autogenous bone with a straightforward technique,no matter the harvest site chose. 6 mm, 8mm and 10 mm harvesters are offered in the set
          which is compatible with the Gorilla RECON Plating System.</Text>
          </View>
          <View style={styles.subRow}>
          <Text containerStyle={{ width: "100%" }}>If you are a surgeon and would like more information or to book a case using the Bone Harvest Graft System, please enter your name and office phone number
          below.</Text>
          </View>
        </View>
      </Wrapper>
    </>
  );
};

export default ReviewCase;
