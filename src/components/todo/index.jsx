import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {COLORS} from '../../../utils/constants';

// import styles
import todoStyles from './style';

// import icons
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// import components
import EditModal from '../editModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import storage

const Todo = ({item = {}, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditText, setWillEditText] = useState(item.text);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const handleDelete = () => {
    console.log(handleDelete);
    Alert.alert(
      'Are you sure that you want to delete the following todo: ',
      `${item?.id}`,
      // buttons
      [
        {text: 'Cancel'},
        {
          text: 'Delete',
          onPress: () => {
            const filteredTodos = todos.filter(x => x.id !== item.id);
            AsyncStorage.setItem('@todos', JSON.stringify(filteredTodos))
              .then(res => setTodos(filteredTodos))
              .catch(err => {
                Alert.alert('ERROR', 'An error occur saving.');
              });
          },
          style: 'destructive',
        },
      ],
    );
  };

  const taskDone = () => {
    Alert.alert(
      'The Task is Done',
      'The status of the Todo will be changed. Are you sure?',
      [
        {text: 'Cancel'},
        {
          text: 'Confirm',
          onPress: () => {
            const tempArray = [];
            for (let i = 0; i < todos.length; i++) {
              if (todos[i].id !== item.id) {
                tempArray.push(todos[i]);
              } else {
                // Replace the existing todo with the updated one
                const updatedTodo = {
                  ...item,
                  completed: !item.completed,
                };
                tempArray.push(updatedTodo);
              }
            }
            // Update the state with the modified array
            AsyncStorage.setItem('@todos', JSON.stringify(tempArray))
              .then(res => setTodos(tempArray))
              .catch(err => {
                Alert.alert('ERROR', 'An error occur saving.');
              });
          },
          style: 'destructive',
        },
      ],
    );
  };

  const handleEdit = () => {
    //Validation
    if (willEditText === '') {
      setErr(true);
      setErrMessage('*You cannot save it empty.');
      setTimeout(() => {
        setErr(false);
        setErrMessage('');
      }, 3000);
      return;
    }
    // Update
    const tempArray = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== item.id) {
        tempArray.push(todos[i]);
      } else {
        // Replace the existing todo with the updated one
        const editedTodo = {
          ...item,
          text: willEditText,
        };
        tempArray.push(editedTodo);
      }
    }
    // Update the state with the modified array
    AsyncStorage.setItem('@todos', JSON.stringify(tempArray))
      .then(res => {
        setTodos(tempArray);
        setOpenModal(false);
      })
      .catch(err => {
        Alert.alert('ERROR', 'An error occur saving.');
      });
  };

  return (
    <View style={todoStyles.todoWrapper}>
      <View style={todoStyles.textWrapper}>
        <Text
          style={[
            todoStyles.title,
            item.completed && todoStyles.completedTask,
          ]}>
          {item?.text}
        </Text>
        <Text style={todoStyles.date}>
          {new Date(item?.date).toLocaleString('en-EN')}
        </Text>
      </View>

      <View style={todoStyles.iconWrapper}>
        <TouchableOpacity onPress={taskDone}>
          <IoniconsIcon
            name={
              item?.completed
                ? 'checkmark-done-circle'
                : 'checkmark-done-circle-outline'
            }
            size={30}
            color={COLORS.taskColor}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <AntDesignIcon name="edit" size={30} color="#F6995C" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDelete}>
          <FontAwesomeIcon name="remove" size={30} color="#BE3144" />
        </TouchableOpacity>
      </View>
      <EditModal
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        willEditText={willEditText}
        setWillEditText={setWillEditText}
        onSave={handleEdit}
        err={err}
        errMessage={errMessage}
      />
    </View>
  );
};

export default Todo;
