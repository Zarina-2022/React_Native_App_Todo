import {SafeAreaView, View, Alert, Text, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';

// import styles
import {app, todo} from './utils/generalStyle';

//import components
import Header from './src/components/header';
import Input from './src/components/input';
import Todo from './src/components/todo';

// import storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

 /**
  * 
  *   useEffect(()=>{
    AsyncStorage.getItem("@todos")
    .then(res=>{
      console.log(res);
      if(res !== null){
        const parseRes = JSON.parse(res)
        setTodos(parseRes)
      }
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  */

  return (
    <SafeAreaView style={app.body}>
      <Header title="MY TODO APP" />
      <Input
        value={text}
        onChangeText={text => setText(text)}
        placeholder="Enter todo"
        hasIcon={true}
        iconName="plussquare"
        onIconPress={addTodo}
      />
      <View style={todo.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={todo.emptyTodo}>There isn't any recorded todos.</Text>
        ) : (
          <ScrollView style={todo.scrollView}>
            {
              todos?.map((item)=>(<Todo key={item?.id} item={item} todos={todos} setTodos={setTodos} />))
            }
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
