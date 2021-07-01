import React, { useState } from 'react';
import { View, Text, Platform } from "react-native";
import { Input } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import styles from "./styles";
import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';

const StepSurgeon = (props) => {
  const [text, setText] = React.useState('');
  const [valueMS, setValueMS] = useState([]);
  const [valueSS, setValueSS] = useState('');
  const [valueSS1, setValueSS1] = useState('');


  const onChangeMS = (value) => {
    setValueMS(value);
  };
  const onChangeSS = (value) => {
    setValueSS(value);
  };

  const onChangeSS1 = (value) => {
    setValueSS1(value);
  };

  const data = [
    {
      value: '1',
      label: 'Tiger Nixon',
    },
    {
      value: '2',
      label: 'Garrett Winters',
    },
    {
      value: '3',
      label: 'Ashton Cox',
    },
    {
      value: '4',
      label: 'Cedric Kelly',
    },
  ];

  return (
    <Wrapper>
    <View style={styles.container}>
      <Text
        style={{
          marginLeft: 15,
          fontSize: 20,
          fontWeight: "400",
          paddingBottom: 20,
        }}
      >
        Procedure
      </Text>
      <View style={styles.row}>
         <Dropdown
            label="Select Procedure Type*"
            mode="outlined" 
            textInputPlaceholder="Select Procedure Type*"
            removeLabel
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
          />
        <Input 
          labelStyle={{color: "black",fontWeight: "bold" }} 
          inputContainerStyle={{borderBottomWidth : 0}}
          inputStyle={{borderWidth: 1, borderColor: "grey", borderRadius: 8,
          marginTop: 10}}
          containerStyle={{ width: "33%",borderWidth:0 }} label="Patient ID*" />
          <Dropdown
            label="Surgeon name"
            data={data}
            enableSearch
            value={valueSS1}
            onChange={onChangeSS1}
          />
        {/* <Input labelStyle={{color: "black",fontWeight: "bold" }} 
        containerStyle={{ width: "33%" }} label="Surgeon*" 
        onChangeText={text => setText(text)}/> */}
      </View>
      <View style={styles.row}>
        <Input labelStyle={{color: "black",fontWeight: "bold" }} containerStyle={{ width: "33%" }} label="Agency*" />
        <Input labelStyle={{color: "black",fontWeight: "bold" }} containerStyle={{ width: "33%" }} label="Sales Rep*" />
        <Input labelStyle={{color: "black",fontWeight: "bold" }} containerStyle={{ width: "33%" }} label="Case Coverage Rep*" />
      </View>
    </View>
  </Wrapper>
  );
};

export default StepSurgeon;
