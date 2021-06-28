import React from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../commons/Wrapper";

const StepHospital = (props) => {
  return (
    <>
      <Wrapper>
        <Input placeholder="Comment" label="Test" />
      </Wrapper>
    </>
  );
};

export default StepHospital;
