import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from "react-native";
//importaciones de componentes
import Tiendas from "./Tiendas";
import Promociones from "./Promociones";
import color from "../color";

export default function Home({ navigation }) {
    return (
        <>
            <StatusBar />
            <ScrollView style={styles.scrollstyle}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.Bottom} onPress={() => {navigation.navigate("Restaurantes");}}>
                        <Image style={styles.imageBottom} source={require("../../../../assets/store.png")} />
                        <Text style={styles.textBottom}>RESTAURANTES</Text>
                    </TouchableOpacity>
                    <Text style={styles.texto}>Promociones</Text>
                    <Promociones />
                    <Text style={styles.texto}>Los mejores restaurantes</Text>
                    <Tiendas />
                    <TouchableOpacity style={styles.buttonSalir} onPress={() => {navigation.navigate("Login");}}>
                        <Text style={styles.TextbuttonSalir}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
        color: "#6D6D6D",
    },
    Bottom: {
        backgroundColor: "#FFAA21",
        flexDirection: 'row',
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: -1,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 5,
        marginTop: 15,
    },
    textBottom: {
        color: "#000",
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: 'bold',
    },
    imageBottom: {
        width: 25,
        height: 25,
        marginRight: 15, 
    },
    buttonSalir: {
        width: '100%',
        paddingVertical: 18,
        backgroundColor: color.CerrarSesion,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    TextbuttonSalir: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
