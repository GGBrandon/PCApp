import React from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import the different screens
//import LoadingScreen from './src/screens/LoadingScreen';
import Start from './src/screens/Start';

const SwitchNavigator = createSwitchNavigator(
  {
    Start: Start,
    //Auth: AuthStack,
    //Root: RootStack
  },
  {
    initialRouteName: 'Start',
  }
);

//const RootContainer = createAppContainer(RootStack);
const RootContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return <RootContainer />;
  }
}