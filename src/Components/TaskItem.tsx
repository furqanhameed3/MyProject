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
import {useQuery, useRealm} from '@realm/react';
import {Task} from '../models/Task';
import {BSON} from 'realm';

const TaskItem = () => {
  const realm = useRealm();
  const taskItem = useQuery(Task);

  const [newTaskItem, setNewTaskItem] = useState('');
  const handleAddTaskItem = () => {
    realm.write(() => {
      realm.create(Task, {description: newTaskItem, owner_id: '123'});
    });
    Keyboard.dismiss();
    setNewTaskItem('');
  };

  const hadnleDeleteTaskItem = (_id: any) => {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(Task, new BSON.ObjectId(_id)));
    });
  };
  return (
    <View>
      <FlatList
        data={taskItem}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text>{item.description}</Text>
            <Pressable onPress={() => hadnleDeleteTaskItem(item._id)}>
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
      <TouchableOpacity
        disabled={!newTaskItem}
        onPress={handleAddTaskItem}
        style={[styles.addTaskBtn, {opacity: !newTaskItem ? 0.7 : 1}]}>
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
