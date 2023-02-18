import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import * as M from '../data'



// 변수
const title = 'BottomBar'
const styles = StyleSheet.create({
    view: { padding: 5, backgroundColor: MD2Colors.blue900 },
    text: { fontSize: 20, color: MD2Colors.white },
})


// 함수
export default function BottomBar() {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

