import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Step, Steps } from "react-step-builder";
import Wrapper from "../commons/Wrapper";
import StepHospital from "./StepHospital";
import StepSurgeon from "./StepSurgeon";
import ReviewCase from "./ReviewCase";
import Products from "./Products";
import Styles from "./styles";

const ButtonNavigation = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <Button
        style={{ marginRight: 10 }}
        title="Save for late"
        type="outline"
        onPress={props.prev}
      />
      <Button title="Next" onPress={props.next} />
    </View>
  );
};

const Before = (props) => {
  return (
    <View style={[Styles.row, { marginVertical: 20 }]}>
      <View style={Styles.item}>
        <View
          style={[
            Styles.dot,
            props.current >= 1 ? Styles.dotEnable : Styles.dotDisable,
          ]}
        ></View>
        <Text>Hospital/Date{props.current}</Text>
      </View>
      <View style={Styles.item}>
        <View
          style={[
            Styles.dot,
            props.current >= 2 ? Styles.dotEnable : Styles.dotDisable,
          ]}
        ></View>
        <Text>Surgeon/Rep Procedure</Text>
      </View>
      <View style={Styles.item}>
        <View
          style={[
            Styles.dot,
            props.current >= 3 ? Styles.dotEnable : Styles.dotDisable,
          ]}
        ></View>
        <Text>Products</Text>
      </View>
      <View style={Styles.item}>
        <View
          style={[
            Styles.dot,
            props.current >= 4 ? Styles.dotEnable : Styles.dotDisable,
          ]}
        ></View>
        <Text>Review Case</Text>
      </View>
    </View>
  );
};

const CreateCaseForm = (props) => {
  const config = {
    before: Before,
    navigation: {
      component: ButtonNavigation,
      location: "after",
    },
  };

  return (
    <>
      <View>
        <View style={Styles.container}>
          <Steps config={config}>
            <Step title="Surgeon" component={StepSurgeon} />
            <Step title="Hospital" component={StepHospital} />
            <Step title="Products" component={Products} />
            <Step title="ReviewCase" component={ReviewCase} />
          </Steps>
        </View>
      </View>
    </>
  );
};

export default CreateCaseForm;
