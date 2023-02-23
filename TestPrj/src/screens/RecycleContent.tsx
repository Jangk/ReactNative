import React from 'react';
import { FC, ReactNode, ComponentProps, useMemo } from 'react'
import { Text, View, StyleProp, ViewStyle, ImageStyle, TouchableOpacity } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export type myStyleProp = {
    viewStyle?: StyleProp<ViewStyle>

}
export type myDataProp = myStyleProp & {
    iconName: string
    iconSize: number
}

export const MyIcon: FC<myDataProp> = ({ iconName, iconSize, ...prop }) => {
    return (
        <View {...prop}>
            <TouchableOpacity>
                <Icon name={iconName} size={iconSize}><Text>ㅇㅇㅇ</Text></Icon>
            </TouchableOpacity>
        </View>
    )
}

export default MyIcon