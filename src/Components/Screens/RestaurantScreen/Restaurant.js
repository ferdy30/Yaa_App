import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, } from "react-native";

import color from "../color";

const Restaurant = ({navigation}) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
            fetch(`https://yaa.onrender.com/api/restaurantes`).then((response) => response.json()).then((resjson) => setRestaurants(resjson));
    }, []);

    const BottomData = (restaurantId) => {
        navigation.navigate("Productos", { restaurantId });
    };

    const renderRestaurant = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => BottomData(item._id)}>
                <View style={styles.restaurantContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: item.banner }} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Image source={{ uri: item.logo }} style={styles.logo} />
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.subname}>{item.description}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList data={restaurants} renderItem={renderRestaurant} keyExtractor={(item) => item._id} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
    restaurantContainer: {
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginHorizontal: 10,
    },
    imageContainer: {
        width: "100%",
        borderRadius: 5,
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: "50%",
        resizeMode: "cover",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: color.TextColor,
    },
    subname: {
        fontSize: 11,
        paddingTop: 2,
        color: color.TextColor,
    },
    image: {
        width: "100%",
        height: 160,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

export default Restaurant;
