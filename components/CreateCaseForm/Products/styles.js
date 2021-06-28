import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  row: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
  },
  rowCustom: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      width: "100%",
  },
  columnFirst: {
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      width: "38%",
      backgroundColor: '#f3f3f3',
  },
      columnSecond: {
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "60%",
  },
  columnThird: {
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      width: "33%",
  }, 
  head: { 
      height: 40, 
      backgroundColor: '#f1f8ff', 
    },
  text: { 
      margin: 6, 
    }
});

export default styles;
