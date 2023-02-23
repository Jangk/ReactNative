import React, { useCallback } from 'react'
import { FC, useState, useEffect, useContext, useMemo, useReducer } from 'react'
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'
import testContext from '../Context/testContext'



export enum eReactHook {
    useState,
    useEffect,
    useContext,
    useReducer,
    useMemo,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    useDebugValue
}

export type myReactData = {
}

const myTime = new Date

const styles = StyleSheet.create({
    font: { fontFamily: 'DancingScript-Bold', fontWeight: '400', fontSize: 50 }
})

const SetNumber = (n: number) => {
    n++
}


export const MyReactHookFC: FC<myReactData> = () => {
    const [count, SetCount] = useState(0)
    const data = useContext(testContext)
    console.log(data, 'useContext')

    const IncreaseCounter = () => {
        console.log(count)
        SetCount(count + 1)
    }
    const DecreaseCounter = () => {
        console.log(count)
        SetCount(count - 1)
    }
    const func1 = useCallback(() => IncreaseCounter, [count])
    const func2 = useCallback(() => DecreaseCounter, [count])
    return (
        <>
            <Text>{count}</Text>
            <Button title={'+'} onPress={func1()} />
            <Button title={'-'} onPress={func2()} />
        </>
    )
}

export default MyReactHookFC

/*





*/