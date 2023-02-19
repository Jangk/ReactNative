import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import * as M from '../data'



// 변수
const title = 'Content'
const styles = StyleSheet.create({
    view: { padding: 5, backgroundColor: MD2Colors.blue700, flex: 1 },
    contentView: { flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' },
    text: { fontSize: 20, color: MD2Colors.white },
})

const data = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
];

type ItemType = { title: string }
const Item = ({ title }: ItemType) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

// 함수
export default function Content() {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={
                () => <View style={({ borderWidth: 1 })} />
            }>
        </FlatList>
    )
}

