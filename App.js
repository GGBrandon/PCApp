import React from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import the different screens
import LoadingScreen from './src/screens/LoadingScreen';


const RootSwitch = createSwitchNavigator(
  {
    LoadingScreen: LoadingScreen,
  
  },
  {
    initialRouteName: 'LoadingScreen'
  }
);

const AuthStack = createStackNavigator(
  {
    //LoadingScreen: LoadingScreen,
    SignUpScreen: SignUpScreen,
   
  },
  {
    initialRouteName: 'LoginScreen',
  }
);
const RootStack = createStackNavigator(
  {
    BookListScreen: BookListScreen,
    //AuthFlow: {screen: RootSwitch},
    BookDetailsScreen: BookDetailsScreen,
    EditBookScreen: EditBookScreen,
    //BookHistoryScreen: {screen: BookHistoryScreen}
  },
  {
    initialRouteName: 'BookListScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen: LoadingScreen,
    Auth: AuthStack,
    Root: RootStack
  },
  {
    initialRouteName: 'LoadingScreen',
  }
);

//const RootContainer = createAppContainer(RootStack);
const RootContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return <RootContainer />;
  }
}