import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
//import { firebase } from '@react-native-firebase/auth';

export default class Start extends React.Component {
    static navigationOptions = {
        title: 'Loading',
        headerLeft: () => null
    }
    componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     this.props.navigation.navigate(user ? 'BookListScreen' : 'LoginScreen')
        // })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})