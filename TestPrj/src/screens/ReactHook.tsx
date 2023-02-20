import React from 'react'
import { FC, useState, useEffect, useMemo, useReducer } from 'react'
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'



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
    reactHookVal: eReactHook
}

const myTime = new Date

const styles = StyleSheet.create({
    font: { fontFamily: 'DancingScript-Bold', fontWeight: '400', fontSize: 50 }
})


export const MyReactHookFC: FC<myReactData> = (value) => {
    return (
        <>
            <Button title={'Increase'} onPress={() => { }} />
            <Button title={'Decrease'} onPress={() => { }} />
            <Text style={styles.font}>{myTime.toLocaleTimeString()}</Text>
        </>
    )
}

export default MyReactHookFC

/*





*/