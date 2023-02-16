import React from 'react';
import { Text, SafeAreaView, Alert, TextInput, StyleSheet } from 'react-native';
import * as M from './data'


const module = M.CreateMyModule();
const arrM = Array(100).map(M.CreateMyModule);
const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20 }
})


const onPress = () => Alert.alert('Haed', 'Body')

export default function App() {
  console.log('App called')
  return (
    <SafeAreaView style={[styles.SafeAreaView, { backgroundColor: 'grey' }]}>
      <TextInput
        placeholder="기본 입력 값"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  )
}

