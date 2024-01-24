import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

import DataPromo from "../DataPromo";

const Promociones = () => {
    const renderPromociones = ({ item }) => {
        return (
            <TouchableOpacity style={styles.CardContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item.image} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DataPromo}
                renderItem={renderPromociones}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    CardContainer: {
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginRight: 15,
    },
    imageContainer: {
        width: 280,
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },
});

export default Promociones;
