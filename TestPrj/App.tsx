import React from 'react';
import {
  Text, View, SafeAreaView, Alert, TextInput, StyleSheet, Platform, Dimensions,
  Image, ImageBackground
} from 'react-native';
import { MD2Colors, MD3Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as M from './src/data'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'



// 변수
const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, padding: 10 },
  text: { fontSize: 20, color: MD2Colors.blue500, marginBottom: Platform.select({ ios: 0, android: 20 }) },
  box: { height: 100, backgroundColor: MD2Colors.white, marginBottom: 10 },
  border: { boderWidth: 10, borderColor: MD2Colors.lime500 },
  ImageBackground: { padding: 10 },
  Image: { width: 50, height: 50, borderRadius: 10 },
  Bold: { fontFamily: 'DancingScript-Bold', textAlign: 'center', fontSize: 20 }
})

// 함수
export default function App() {
  console.log('App Called')
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  )
}