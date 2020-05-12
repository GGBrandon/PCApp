
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> PCA To-Do App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#798db5'
    },
    title: {
        textAlign: 'center',
        color: '#1c60e8',
        fontSize: 30,
        fontWeight: 'bold'
    }
})