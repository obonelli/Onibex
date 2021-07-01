import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";
import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';

const StepHospital = (props) => {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState("java");
  const [valueSS, setValueSS] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const onChangeSS = (value) => {
    setValueSS(value);
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
            <Input containerStyle={{ width: "33%" }} label="Sugery Date" 
             placeholder='mm/dd/yyyy'
              rightIcon={
                <Icon
                  name='calendar'
                  size={24}
                  color='black'
                  onPress={showDatePicker}
                />
              }/>
            <Input containerStyle={{ width: "33%" }} label="Sugery Time" 
            placeholder='hh:mm'
            rightIcon={
              <Icon
                name='clock-o'
                size={24}
                color='black'
                onPress={showDatePicker}
              />
            }/>
            <Input containerStyle={{ width: "33%" }} label="Duration" 
            placeholder='hh:mm'
            rightIcon={
              <Icon
                name='clock-o'
                size={24}
                color='black'
                onPress={showDatePicker}
              />
            }/>
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
            <Input containerStyle={{ width: "33%" }} label="Ship Date" 
             placeholder='mm/dd/yyyy'
             rightIcon={
               <Icon
                 name='clock-o'
                 size={24}
                 color='black'
                 onPress={showDatePicker}
               />
             }/>
            <Input containerStyle={{ width: "33%" }} label="Due Date" 
             placeholder='mm/dd/yyyy'
             rightIcon={
               <Icon
                 name='clock-o'
                 size={24}
                 color='black'
                 onPress={showDatePicker}
               />
             }/>
            <Dropdown
            label="Case Type*"
            mode="outlined" 
            textInputPlaceholder="Select Case"
            removeLabel
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
          />
          </View>
          <View style={styles.row}>
          <Dropdown
            label="Ship Method*"
            mode="outlined" 
            textInputPlaceholder="Select Method"
            removeLabel
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
          />
            <Dropdown
            label="Ship-to Address*"
            mode="outlined" 
            textInputPlaceholder="Select Address"
            removeLabel
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
          />
          <Button
            style={styles.logoutScreenButton}
            title="Enter New Address"
            type="outline"
          />
          </View>
          <View style={styles.row}>
          {/* <ModalDatePicker 
            button={<Text> Open </Text>} 
            locale="en" 
            onSelect={(datetime) => console.log(datetime) }
            isHideOnSelect={true}
            initialDate={new Date()}
        />   */}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              locale="en_GB" // Use "en_GB" here
              date={new Date()}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
      </Wrapper>
    </>
  );
};

export default StepHospital;
