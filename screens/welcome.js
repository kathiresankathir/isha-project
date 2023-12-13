import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import {img } from './images/image1.png';

const App = () => {
  return (
    <View style={styles.maincontainer}>
    <View style={styles.container}>
      <Image source={require('./images/image1.png')}/>
      <Text style={styles.welt}>Consult Specialist Doctors
      Securely And Privately</Text>
      <View style={styles.btnstyle}>
        <TouchableOpacity>
          <Text style={{fontWeight:'bold',color:"#fff"}}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </View></View>
    
  )
}

export default App

const styles = StyleSheet.create({
  btnstyle: {
    top:200,
    padding:10,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 20,
    backgroundColor: "#119988",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding:20,
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
maincontainer:{
  width:"100%",
  height:"100%",
  justifyContent:"center",
  alignItems:"center"
},
welt:{
  top:20,
  fontSize:20,
  fontWeight:"bold",

}

})