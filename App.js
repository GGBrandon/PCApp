
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback,
Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import addTodo from './components/addTodo';
import AddToDo from './components/addTodo';

export default function App() {
    const [todos, setTodos] = useState([
     
    ]);

    const pressHandler = (key) => {

        setTodos((prevTodos) =>  {
            return prevTodos.filter(todo => todo.key != key);

        });
    }

    const submitHandler = (text) => {

        if(text.length >= 2){
            setTodos((prevTodos) => {
                return[
                    { text: text, key: Math.random().toString() },
                    ...prevTodos

                ];
            });
        } else {
            Alert.alert('Error' , 'Must be at least 2 Characters long',[
                {text: 'OKAY', onPress: () => console.log('alert close')}
            ])
        }
    }



    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddToDo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <ToDoItem item={item} pressHandler={pressHandler}/>
                )}
              />
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
    }, 
    content: {
        padding: 30,
    },
    list: {
        marginTop:20,
    }
});