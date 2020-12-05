import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddToDo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHanlder = (value) => {
        setText(value);

    }
    
    return (
        <View>
            <TextInput
            style={StyleSheet.input}
            placeholder='Add....'
            onChangeText={changeHanlder}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='royalblue' />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 10,
        borderBottomColor: "#ddd"
    }




})