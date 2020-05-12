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
            placeholder='new todo....'
            onChangeText={changeHanlder}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='#000' />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }




})