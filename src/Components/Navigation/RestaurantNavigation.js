import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Screens/HomeScreen/Home'
import Restaurant from '../Screens/RestaurantScreen/Restaurant'
import Products from '../Screens/ProductsScreen/Products'
import Details from '../Screens/FoodDetails/Details'

export default function RestaurantNavigation() {
    
    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerTintColor:'#000', headerBackTitleVisible: false, headerMode: 'screen' }}>
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'Restaurantes'} component={Restaurant} />
                <Stack.Screen name={'Productos'} component={Products} options={{title: '', headerTransparent: true,}}/>
                <Stack.Screen name={'Detalles'} component={Details} options={{title: '',}}/>
            </Stack.Navigator>
    );
}