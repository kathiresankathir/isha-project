
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
    <View>
        <Text>welcome to react native</Text>
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '40%',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
    marginLeft: 30, marginRight: 30,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,


});


