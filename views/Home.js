import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}) {

    return (
        <View>
            <Text>Esse é o componente Home</Text>
            <Button
                    title='Ir para Login'
                    onPress={() => navigation.navigate('Login',{
                    id: 30
                })}
            />
        </View>
    );
}


export default function Home({navigation}) {

    return (
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/img/senha-de-login.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Rastreio')}>
                <Image source={require('../assets/img/numero-de-rastreio.png')}/>
            </TouchableOpacity>
        </View>
    );
}