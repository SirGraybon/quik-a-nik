import {
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from "react-native";

export default function Navbar(props) {
  const width = useWindowDimensions().width;
  const { setViewHistory, back, transition } = props;

  const viewSwitcher = function (newView) {
    transition(newView);
  };

  return (
    <Text style={styles.webNavBar}>
      <Pressable style={styles.button} onPress={() => viewSwitcher("HOME")}>
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => viewSwitcher("PRODUCTS")}>
        <Text>Products</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => viewSwitcher("MAP")}>
        <Text>Map</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text>{width}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => viewSwitcher("CART")}>
        <Text>Cart</Text>
      </Pressable>
    </Text>
  );
}

const styles = StyleSheet.create({
  webNavBar: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 3,
    height: 50,
    shadowColor: "grey",
    width: "70%",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 10,
    position: "fixed",
    top: 20,
  },

  button: {
    backgroundColor: "white",
  },
});