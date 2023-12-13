import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from 'react-native-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import loginpage from './loginpage';
import welcome from './welcome'
const Stack = createStackNavigator();

const Auth =() =>{
  return (
   <NavigationContainer>
   <Stack.Navigator>
   
   <Stack.Screen name="login" component={loginpage} />
   </Stack.Navigator>
   </NavigationContainer>
   
  
  )
}
export default Auth;
const styles = StyleSheet.create({
 
});