import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import * as M from '../data'



// 변수
const title = 'Content'
const styles = StyleSheet.create({
    view: { padding: 5, backgroundColor: MD2Colors.blue700, flex: 1 },
    text: { fontSize: 20, color: MD2Colors.white },
})


// 함수
export default function Content() {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
            <View style={[{ flex: 0, backgroundColor: MD2Colors.red500 }]}>
                <Text>flex 0</Text>
            </View>
            <View style={[{ flex: 1, backgroundColor: MD2Colors.green500 }]}>
                <Text>flex 1</Text>
            </View>
            <View style={[{ flex: 2, backgroundColor: MD2Colors.purple500 }]}>
                <Text>flex 2</Text>
            </View>
        </View>
    )
}

