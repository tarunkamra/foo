import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; // Correct import path
import RestaurantScreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react' ;

export default function Navigation() {
    return(
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
