import React, { Fragment, useState, useMemo, useEffect, useRef, useCallback } from 'react'
import {
  Text, View, SafeAreaView, Alert, TextInput, StyleSheet, Platform, Dimensions,
  Image, ImageBackground, Button, Animated
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
  MyView: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
})

// 함수
export default function App() {
  console.log('App Called')

  let timeCheck = false;
  let fadeCheck = false;
  const animationValue = useRef(new Animated.Value(1)).current
  const animationPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  const animationStyle = { opacity: animationValue }
  const animationObject = {
    backgroundColor: 'red', width: 100, height: 100, transform: [{ translateX: animationPosition.x }, { translateY: animationPosition.y }]
  }


  const setAnimation = (val: Animated.ValueXY) => {
    console.log('애니메')
    return Animated.timing(val, { useNativeDriver: true, toValue: { x: 0, y: 200 }, duration: 1000 })
  }
  const SetObject = (val: Animated.ValueXY) => {
    return {
      backgroundColor: 'yellow', width: 100, height: 100, transform: [{ translateX: val.x }, { translateY: val.y }]
    }
  }


  const positions = [
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current,
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current,
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current,
    useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  ]

  // 시간에 걸쳐 애니메이션 실행
  const SetFade = useCallback(() => {
    if (fadeCheck) {
      fadeCheck = false
      fadeIn()
    }
    else {
      fadeCheck = true;
      fadeOut()
    }
  }, [])
  const fadeIn = useCallback(() => {
    console.log('fadeIn')
    Animated.timing(animationValue, { useNativeDriver: true, toValue: 1, duration: 1000 }).start()
  }, [])
  const fadeOut = useCallback(() => {
    console.log('fadeOut')
    Animated.timing(animationValue, { useNativeDriver: true, toValue: 0, duration: 1000 }).start()
  }, [])

  // 스프링마냥 반동에 흔들거리는 ? 애니메이션 실행
  const doSpring = useCallback(() => {
    console.log('doSpring')
    Animated.spring(animationPosition,
      { useNativeDriver: true, toValue: { x: 100, y: 300 }, friction: 2, tension: 100 }).start()
  }, [])

  // 점점 감속하는 애니메이션 
  const doDecay = useCallback(() => {
    console.log('doDecay')
    Animated.decay(animationPosition,
      { useNativeDriver: true, velocity: 0.4 }).start()
  }, [])

  // 여러개의 애니메이션 한번에 관리/실행
  const doParallel = useCallback(() => {
    console.log('doParallel')
    Animated.parallel(positions.map(position => setAnimation(position))).start()
  }, [])

  return (
    <>
      <SafeAreaView>
        <Button title='Action Fade' onPress={SetFade} />
        <Button title='Action Spring ' onPress={doSpring} />
        <Button title='Action Decay' onPress={doDecay} />
        <Button title='Action Parallel' onPress={doParallel} />
        <Animated.View style={[animationObject, animationStyle]}>
          {
            positions.map((position, index) => {
              return <Animated.View style={[SetObject(position)]} />
            })
          }
        </Animated.View>
      </SafeAreaView>
    </>
  )
}


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
<Text>{time.toLocaleTimeString()}</Text> 



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



// 서버 데이터 받아오기 
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




  /////////////////// 애니메이션
   <Button title={'fadeIn'} onPress={fadeIn}></Button>
          <Button title={'fadeOut'} onPress={fadeOut}></Button>
          <Button title={'spring'} onPress={doSpring}></Button>


*/