import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { auth } from '../firebase'
const HomeScreen = () => {
  const navigation = useNavigation()
  //logout function
  const handleLogout = () => {
      auth.signOut()
      .then(()=>{
          navigation.replace("Login")
      })
      .catch('error => alert(error.message)')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Email:{auth.currentUser?.email}</Text>

    <TouchableOpacity style={styles.button}
      onPress={handleLogout}
      >
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
  text:{
    fontSize:15,
    fontWeight:'bold',
  },
  button:{
    backgroundColor:'lightblue',
    padding:10,
    width:200,
    marginTop:20,
    borderRadius:10,
    alignItems:'center',
  },
buttonText:{
  color:'white',
  fontWeight:'bold',
},
})