/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const App = () => {
  const [person1, setPerson1] = useState(3);
  const [person2, setPerson2] = useState(3);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  const handleStartGame=()=>{
    setPerson1(getRandomInt(1,3))
    setPerson2(getRandomInt(1,3))
  }
  return (
    <SafeAreaView style={{backgroundColor: '#663399', flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          backgroundColor: 'indigo',
          alignItems: 'center',
          padding: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          سنگ   کاغذ   قیچی
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <FontAwesome5  color='#fff' name={person1==1?"hand-scissors":(person1==2?"hand-rock":(person1==3?"hand-paper":''))} size={75} />
        <Pressable onPress={handleStartGame} style={{backgroundColor:'rgba(0,0,0,0.2)',paddingVertical:10,paddingHorizontal:70,borderRadius:40}}>
          <Text style={{fontWeight:'bold',color:'#fff',fontSize:16}}>شروع بازی</Text>
        </Pressable>
        <FontAwesome5 color='#fff' name={person2==1?"hand-scissors":(person2==2?"hand-rock":(person2==3?"hand-paper":''))} size={75} />

      </View>
    </SafeAreaView>
  );
};

export default App;
