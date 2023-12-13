import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native'
import {img } from './images/doctor1.png';
import {imge } from './images/patient1.png';

const App = () => {
  return (
    <View style={styles.container1}>
     <View style={styles.container}>
      <Image source={require('./images/doctor1.png')}/>
      <TouchableOpacity>
      <Text style={styles.welt}>Doctor</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.container2}>
     <View style={styles.container}>
      <Image source={require('./images/patient1.png')}/>
      <TouchableOpacity>
      <Text style={styles.welt}>Patient</Text>
      </TouchableOpacity>
     </View>
     </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container1:{
    top:150,
    justifyContent:"center",
    alignItems:"center"
  },
  welt:{
    padding:40,
    fontWeight:'bold',
    fontSize:20,
  }

})