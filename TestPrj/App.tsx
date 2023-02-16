import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import * as M from './data'
import type { myModule } from './data/MyModule'


const module = M.CreateMyModule();
const arrM = Array(100).map(M.CreateMyModule);


export default function App() {
  console.log('App called')
  return (
    <SafeAreaView>
      <ScrollView><Text>{JSON.stringify(module, null, 2)}</Text></ScrollView>
    </SafeAreaView>
  )
}