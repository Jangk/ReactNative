import React, { Fragment, useState, useMemo } from 'react'
import {
  Text, View, SafeAreaView, Alert, TextInput, StyleSheet, Platform, Dimensions,
  Image, ImageBackground, Button
} from 'react-native';
import { MD2Colors, MD3Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'
import RecycleContent from './src/screens/RecycleContent'
import MyReactHook from './src/screens/ReactHook';
import CustomReactHook, { useClock } from './src/screens/CustomReactHook'
import * as M from './src/data'
import { create } from 'react-test-renderer';
import testContext from './src/Context/testContext'
import { ExamModel } from './src/examModel';


// 변수
const styles = StyleSheet.create({
  view: {
    backgroundColor: MD2Colors.amber900, flexDirection: 'row', alignItems: 'flex-start',
    justifyContent: 'space-evenly', flexWrap: 'wrap-reverse', overflow: 'hidden'
  },
  SafeAreaView: { flex: 1, padding: 10 },
  absoluteView: { backgroundColor: MD2Colors.amber400, position: 'absolute', right: 50, bottom: 10 },
  text: { fontSize: 20, color: MD2Colors.blue500, marginBottom: Platform.select({ ios: 0, android: 20 }) },
  box: { height: 100, backgroundColor: MD2Colors.white, marginBottom: 10 },
  border: { boderWidth: 10, borderColor: MD2Colors.lime500 },
  ImageBackground: { padding: 10 },
  Image: { width: 50, height: 50, borderRadius: 10 },
  Bold: { fontFamily: 'DancingScript-Bold', textAlign: 'center', fontSize: 20 },
  MyView: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }
})

// 함수
export default function App() {
  console.log('App Called')

  // fetch로 서버데이터 받아오기
  let url = 'https://reactnative.dev/movies.json'
  const [movie, SetMovie] = useState([])
  //let fetchOption = {
  //  method: "POST",
  //  headers: {
  //    'Content-type': 'application/json'
  //  },
  //}
  //fetch(url)
  //  .then(res => res.json())              //json으로 받을 것을 명시
  //  .then(res => {                        //실제 데이터를 상태변수에 업데이트
  //    SetMovie(res)
  //  })


  // XMLHttoRequest로 서버 데이터 받아오기
  const xhr = new XMLHttpRequest();
  const method = "GET";
  xhr.open(method, url);
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState === XMLHttpRequest.DONE) {
      console.log('성공')
      console.log(xhr.response)
      SetMovie(xhr.response)
    }
  }
  xhr.send();


  return (
    <>
      <SafeAreaView>
        <Text>{JSON.stringify(movie)}</Text>
      </SafeAreaView>
    </>
  )
}

{/* <Text>{time.toLocaleTimeString()}</Text> */ }

// 주석
/*
타이머
//const time = useClock()



<TopBar />
<Content />
<RecycleContent iconName='commet' iconSize={30} viewStyle={styles.MyView}></RecycleContent>
<Text>{count}</Text>
<Button title={'click'} onPress={() => setCount(count + 1)} />
<BottomBar />



// 앱구성
<TopBar />
<Content />
<testContext.Provider value='aa'>
  <RecycleContent iconName='commet' iconSize={50} />
  <SafeAreaView style={styles.SafeAreaView}>
    <MyReactHook />
  </SafeAreaView>
</testContext.Provider>
<BottomBar />



// 네트워크




*/