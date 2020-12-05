import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ToDoItem({ item, pressHandler }){


    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )



}

const styles = StyleSheet.create({


    item: {
        padding:18,
        marginTop: 10,
        borderColor: '#000',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20

    }


})