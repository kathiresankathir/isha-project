import { StyleSheet, Text,TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ComponentEventsObserver } from 'react-native-navigation/lib/dist/src/events/ComponentEventsObserver'


const App = () => {
  return (
    <View style={styles.Con}>
       <Text style={{fontWeight:'bold',color:"#119988",fontSize:26}}>Consult</Text>
      <View style={styles.subcontainer}>
        <Text style={{fontWeight:'bold',top:50,fontSize:20}}>Register with us! </Text>
        <View style={styles.ssub}>
          <TextInput style={styles.username} placeholder="username"></TextInput>
          <TextInput style={styles.username} placeholder="email"></TextInput>
          <TextInput style={styles.username} placeholder="password"></TextInput>
          <TextInput style={styles.username} secureTextEntry={true} placeholder=" confirm password"></TextInput>
        </View>
        <View style={styles.logi}>
        <TouchableOpacity>
          <Text style={{ fontWeight:'bold',color:"#fff",fontSize:20}}> log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tec}>
      <Text > Already have an account? </Text>
      <TouchableOpacity>
      <Text style={{color:"#119988"}}>  Sign up</Text>
      </TouchableOpacity>
      </View>
      </View> 
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Con:{
    width:'100%',
    flex:1,
    top:50,
    alignItems:'center',

  },
  subcontainer: {
    top:"10%",
    backgroundColor:"#d9d9d9",
    width:"100%",
    borderRadius:30,
    alignItems:'center',
    flex:1, 
  },
  ssub:{
    top:100,
    width:'100%',
    padding:70,
    rowGap:20,
  },
    username: {
      width: "100%",
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:40,
      alignContent:'center',
      borderRadius: 30,
      marginBottom: 10,
      backgroundColor: "#fff",
  },
  logi:{
    top:80,
    padding:15,
    alignItems:'center',
   
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 20,
    backgroundColor: "#119988",
  },
  tec:{
    top:100,
    fontWeight:'bold',
    color:'#fff',
    flexDirection:'row',
  }
})