import React, { Component } from 'react'
import { Text } from 'react-native'
import * as M from '../data'

const testModule = M.CreateMyModule()

// Render의 리턴값으로 JSX 넣으면 에러뜸
// 왜 그런지 이유 찾아볼것
export default class myClassComponent extends Component {
  render() {
    console.log('Class Component Called')
    return <Text>{JSON.stringify(testModule, null, 2)}</Text>
  }
}

export const myArrowComponent = () => {
  console.log('Arrow Component Called')
  return null
}