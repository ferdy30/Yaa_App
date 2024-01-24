import { useNavigation } from '@react-navigation/native';
import  { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image ,Button,Alert} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginScreen({navigation}){
  
  
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const auth = getAuth();
  const createUser = () => {  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

        navigation.navigate('navigation');
        setEmail('');
        setPassword(''); 
        const user = userCredential.user;
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)

      if (email == "" & password == ""){
        Alert.alert('Porfavor ingrese los datos')

      }else if(errorMessage == "Firebase: Error (auth/invalid-email)."){
        Alert.alert('Email invalido, porfavor revisa la informacion')

      }else if(errorMessage == "Firebase: Error (auth/wrong-password)."){
      Alert.alert('Contraseña invalida')

      }else if(errorMessage == "Firebase: Error (auth/missing-password)."){
        Alert.alert('Ingresa la contraseña')
        }
      else {
      Alert.alert("Datos no coinciden")
    }
    });



  }
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../../assets/letrasYAA.png')} />
        </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={txt => setEmail(txt)}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={txt => setPassword(txt)}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity style={styles.button} title="Login" onPress={()=>{
        createUser()
      }}
      >
        <Text style={styles.textRegistro}>Iniciar sesión</Text>
      </TouchableOpacity>
      

      <TouchableOpacity
        style={styles.buttonTextRegistro}
        onPress={() => { navigation.navigate('Registro');}}
      >
        <Text style={styles.textRegistro}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8F161C',
    padding: 20,
  },
  logoContainer:{
    width: '40%',
    height: '8%',
    marginBottom: 35,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#470B0E',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  buttonTextRegistro: {
    position: 'absolute',
    marginBottom: 40,
    bottom: 0,
  },
  textRegistro: {
    color: '#fff',
    fontSize: 24,
  },
});
