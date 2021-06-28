import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
  },
  dot: {
    width: 17,
    height: 17,
    marginBottom: 10,
    borderRadius: 50,
  },
  dotEnable: {
    backgroundColor: "blue",
  },
  dotDisable: {
    backgroundColor: "#c2c2c2",
  },
});

export default Styles;
