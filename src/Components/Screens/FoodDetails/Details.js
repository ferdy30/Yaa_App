import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from "react-native";
import color from "../color";

const Details = ({ route }) => {
    const { item } = route.params;

    const phoneNumber = "72199134";
    const message = `¡Hola! Me gustaria pedir el siguiente producto: ${item.name}.`;
  
    //Funcion que abre whasapp y envia mensaje sobre producto
    const openWhatsApp = () => {
      const url = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
      Linking.openURL(url)
        .then(() => {
          console.log("WhatsApp abierto exitosamente");
        })
        .catch((error) => {
          console.log("Error al abrir WhatsApp", error);
        });
    };

    return (
        <View style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
                    <Text style={styles.buttonText}>Procesar order</Text>
                    <Text style={styles.buttonText}>${item.price}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: color.TextColor,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: color.TextColor,
    },
    price: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: color.PrimaryColor,
    },
    footer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    button: {
        backgroundColor: color.PrimaryColor,
        paddingVertical: 15,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 19,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Details;
