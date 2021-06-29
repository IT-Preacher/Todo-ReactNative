import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { ImageBackground, 
         Button, 
         StyleSheet, 
         Text, 
         View,
         ScrollView,
         FlatList,
         SafeAreaView } from 'react-native';
import {Navbar} from './src/components/Navbar/Navbar.js';
import {AddTodo} from './src/components/AddTodo/AddTodo.js';
import {TodoItem} from './src/components/TodoItem/TodoItem.js';

export default function App() {
  const [todos, setTodos] = useState([]);
  

  function addTodo(title){
    /*const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    //setTodos(todos.concat([newTodo]));*/
    setTodos(prevTodos => [...prevTodos, {
      id: Date.now().toString(),
      title: title
    }]);
  }

  function remoweTodoItem(id){
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title='Todo App'/>
      <View style={styles.addBlock}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => <TodoItem todo={item} onRemove={remoweTodoItem}/>}
        />
        {/*<ScrollView>
          {todos.map( el => <TodoItem key={el.id} todo={el}/>)}
        </ScrollView>*/}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    //alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },*/
  text:{
    color: '#fff',
    fontSize: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addBlock:{
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  btn:{
    width: 100,
    marginHorizontal: 50,
    marginTop: 10,
  }
});
