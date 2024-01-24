import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking} from "react-native";
import data from '../Data'

export default function Products({navigation}) {
    return(
        data.map((product,i) => {
                return(               
                    <View key={i} style={styles.container} >
                        <TouchableOpacity style={styles.item} /* onPress={() => { navigation.navigate('Productos');}} */>
                           <Image style={styles.image} source={product.banner} />
                            <View style={styles.contentProducts}>              
                                <View style={styles.text}>
                                    <Image style={styles.image2} source={product.logo} />
                                     <View style={styles.text}>
                                       <Text style={styles.name}>{product.name}</Text>                               
                                    </View>                              
                                </View>                   
                            </View>                     
                        </TouchableOpacity>
                    </View>       
                )
        })
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        shadowOffset: {
            width: -1,
            height: 2,
        },
        shadowOpacity:  0.05,
        shadowRadius: 3.05,
        elevation: 0
    },
    contentProducts:{
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    image: {
        width: "100%",
        height: 160,
        borderRadius: 5,
        marginBottom: 10,
    },
    image2: {
        width: "12%",
        height: 41 ,
        borderRadius: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal:55,
        marginVertical:-40,
    }, 
    
  
});
