import React from 'react'
import { useState, FC } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'



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

export const MyReactHookFC: FC<myReactData> = (value) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Text>{count}</Text>
            <Button title={'click'} onPress={() => setCount(count + 1)} />
        </>
    )
}

export default MyReactHookFC