import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import {Home,Login,Rastreio} from './views';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
<View style={css.container}></View>

return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                name="Home"
                component={Home}
                options={{
                title:"WEFLOG",
                headerStyle:{backgroundColor:"#F58634"},
                headerTintColor:'#333',
                headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
            }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
);

<Stack.Screen name="Login" options={{headerShown:false}} component={Login} />