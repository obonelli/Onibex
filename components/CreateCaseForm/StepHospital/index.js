import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import styles from "./styles";

const StepHospital = (props) => {
  const [token, setToken] = useState('');


  // useEffect(() => {
  //   axios.get(`http://vhcals4hcs.dummy.nodomain:50000/sap/opu/odata/sap/API_SALES_QUOTATION_SRV/$metadata?sap-client=100`)
  //   auth: {
  //     username: BPINST,
  //     password: Welcome1
  //   }
  //   }).then(res => { 
  //     const token = res.data;
  //     setToken(token);
  //   })
  // };

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
