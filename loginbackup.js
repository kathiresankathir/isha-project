import {StyleSheet,Text,View, TextInput, TouchableOpacity,} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.linn}>Log in</Text>
      <View>
        <TextInput style={styles.username} placeholder="username"></TextInput>
        <TextInput
          style={styles.username}
          secureTextEntry={true}
          placeholder="password"
        ></TextInput>
      </View>
      <View style={styles.btnstyle}>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 300,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
    borderRadius: 30,
  },
  username: {
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 20,
    top: 20,
    marginBottom: 10,
    backgroundColor: "grey",
  },

  btnstyle: {
    top: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: "#ff7373",
    justifyContent: "center",
    alignItems: "center",
  },
  wholebox: {
    justifyContent: "center",
    alignItems: "center",
  },
});
