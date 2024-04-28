import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, Ionicons, h} from '../constants';

const TaskItem = () => {
  const [taskItem, setTaskItem] = useState([
    {id: 1, title: 'Task 1'},
    {id: 2, title: 'Task 2'},
  ]);
  const [newTaskItem, setNewTaskItem] = useState('');
  const handleAddTaskItem = () => {
    if (!newTaskItem) return;
    setTaskItem([...taskItem, {id: taskItem.length + 1, title: newTaskItem}]);
    Keyboard.dismiss();
    setNewTaskItem('');
  };

  const hadnleDeleteTaskItem = (id: number) => {
    setTaskItem(taskItem.filter(item => item.id !== id));
  };
  return (
    <View>
      <FlatList
        data={taskItem}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <Pressable onPress={() => hadnleDeleteTaskItem(item.id)}>
              <Ionicons name="close-sharp" size={20} />
            </Pressable>
          </View>
        )}
      />
      <TextInput
        onChangeText={text => setNewTaskItem(text)}
        placeholder="Add Task"
        style={styles.itemInput}
        value={newTaskItem}
      />
      <TouchableOpacity onPress={handleAddTaskItem} style={styles.addTaskBtn}>
        <Text style={styles.taskTxt}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: h('0.8%'),
    backgroundColor: '#b4f9e8',
    marginVertical: h('0.5%'),
    borderRadius: 5,
    height: h('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addTaskBtn: {
    backgroundColor: COLORS.primary1,
    padding: h('1.5%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTxt: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  itemInput: {
    padding: h('0.8%'),
    height: h('5%'),
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
    marginVertical: h('1%'),
  },
});

export default TaskItem;
