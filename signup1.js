import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.fon}>
      <Text style={{fontWeight:'bold'}}>have fun</Text>
      <TouchableOpacity>
      <Text style={{color:"red",fontWeight:"bold"}}> today</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  fon:{
    width:"100%",
    height:"100%",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  }
})