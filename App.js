
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import addTodo from './components/addTodo';
import AddToDo from './components/addTodo';

export default function App() {
    const [todos, setTodos] = useState([
        { text: '1', key: '1' },
        { text: '2', key: '2' },
        { text: '3', key: '3' }

    ]);

    const pressHandler = (key) => {

        setTodos((prevTodos) =>  {
            return prevTodos.filter(todo => todo.key != key);

        });
    }

    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return[
                { text: text, key: Math.random().toString() },
                ...prevTodos

            ];
        })
    }

    return (
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
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
    }, 
    content: {
        padding: 40,
    },
    list: {
        marginTop:20,
    }
});