import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()
    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    },[])

    // handle signup
    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            console.log('Registered with:', user.email)
        })
        .catch(error => alert(error.message))
    }
    // handle Login
    const handleLogin = () =>{
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            console.log('Logged in with:', user.email)     
        })
        .catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>LoginScreen</Text>
      <View>
        <TextInput 
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text.trim())}
        style={styles.input}
        />
        <TextInput 
        placeholder='Password'
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry 
        style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity 
        onPress={handleLogin}
        style={styles.button}
        >
        <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={handleRegister}
        style={styles.buttonOutline}
        >
        <Text style={styles.textOutline}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 240,
    borderRadius: 6,
    backgroundColor: 'lightgray',
    marginLeft: 12,
    margin:3,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    height: 40,
    width: 160,
    borderRadius: 6,
    backgroundColor: 'blue',
    marginLeft: 12,
    marginTop:20,
    borderWidth: 1,
    padding: 10,
    borderColor:'blue',
    borderWidth:2
  },
  buttonOutline:{
    backgroundColor:'white',
    borderColor: 'blue',
    height: 40,
    width: 160,
    marginLeft:12,
    marginTop:2,
    borderWidth:2,
    borderRadius: 6,
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  textOutline:{
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop:6
    
  }
})