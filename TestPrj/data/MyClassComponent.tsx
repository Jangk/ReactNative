// 클래스 컴포넌트. Compenent를 상속(확장)해야만 사용가능.
// render를 구현해야하며, JSX 구문또는 ReactNode를 반환해야함.
import React, { Component } from 'react'
import { Text } from 'react-native'
import * as M from '../data'

const testModule = M.CreateMyModule()


export default class myClassComponent extends Component {
  render() {
    console.log('Class Component Called')
    return <Text>{JSON.stringify(testModule, null, 2)}</Text>
  }
}

