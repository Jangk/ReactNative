import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import ClassComponent from './data/MyClassComponent';



export default function App() {
  console.log('App called')
  return (
    <SafeAreaView>
      <ClassComponent />
    </SafeAreaView>
  )
}