
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> PCA To-Do Assignments</Text>
            <Text style={styles.creator}> Made by: Brandon GarciaGomez</Text>
            <Text style={styles.PCA}> *Not Official*</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        paddingTop: 2,
        backgroundColor: 'silver'
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'top',
        color: 'royalblue',
        fontSize: 25,
        fontWeight: 'bold'
    },
    creator: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
        fontWeight: '900'


    },
    PCA: {
        textAlign: 'center',
        color: 'black',
        fontSize: 10,
        fontWeight: '900'


    }
})