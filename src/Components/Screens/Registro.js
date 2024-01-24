import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Alert} from "react-native";
import { initializeApp } from "firebase/app";
import { firebase } from "../Utils/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Registro({navigation}){


    const auth = getAuth();

    const [email,setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [usuario, setUser] = useState('')
  
    const createUser = () => {   

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
      const user = userCredential.user
      console.log(user)
      navigation.navigate('Login')
      setEmail('');
      setPassword('');
      setUser('');
      Alert.alert('Usuario exitosamente creado')

    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      //VALIDACION DE DATOS


      if (email == "" & password == "" & usuario == "" ){
        Alert.alert('Porfavor ingrese datos')
      }
      else if (errorMessage == 'Firebase: Error (auth/invalid-email).'){

        Alert.alert('Email invalido intenta de nuevo')
      }
      else if (errorMessage == 'Firebase: Error (auth/email-already-in-use).') {
        Alert.alert('Email ingresado ya esta en uso')
      
      }else if (errorMessage == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        Alert.alert('La contraseña debe tener almenos 6 caracteres')
      
      }else if (errorMessage == 'Firebase: Error (auth/missing-password).') {
        Alert.alert('Porfavor ingrese la contraseña')
      
      }else{
        console.log(errorCode)
        console.log(errorMessage)
        Alert.alert(errorMessage)
      }
    });

    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTRARSE</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    autoCapitalize="none"
                    value={usuario}
                    onChangeText={txt => setUser(txt)}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={txt => setPassword(txt)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.buttonContainer}>     
                <TouchableOpacity style={styles.button} title="Registrarse" onPress={()=>{ createUser();}}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => { navigation.navigate('Login');}}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8F161C",
        padding: 20,
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 35,
        color: "white",
       
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 5,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#470B0E",
        borderRadius: 5,
        marginTop: 20,
        marginRight: "5%",
        width: "45%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: "#470B0E",
        borderRadius: 5,
        marginTop: 20,
        marginLeft: "5%",
        width: "45%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    cancelButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});
