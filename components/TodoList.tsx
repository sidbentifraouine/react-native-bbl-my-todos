import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import { Input } from 'react-native-elements'
import * as Font from 'expo-font'
import TodoItem from './TodoItem'
import { TODOS } from '../utils/mocks'
import { Todo } from '../utils/types'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(TODOS)
  const [newTodoText, setNewTodoText] = useState<string>('')
  const [fontReady, setFontReady] = useState(false)

  Font.loadAsync({
    'Pacifico Regular': require('../assets/Pacifico-Regular.ttf')
  }).then(() => {
    setFontReady(true)
  })

  const changeTodoState = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.done = !todo.done
        }
        return todo
      })
    )
  }

  const addNewTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      done: false
    }
    setNewTodoText('')
    setTodos([...todos, newTodo])
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <View style={styles.container}>
        {fontReady ? <Text style={styles.title}>My Todos</Text> : null}
        <Input
          value={newTodoText}
          onChangeText={(text) => setNewTodoText(text)}
          onSubmitEditing={addNewTodo}
          placeholder='Ajouter une tâche'
          containerStyle={styles.newTodoInput}
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 450 }}
          showsVerticalScrollIndicator={false}
        >
          {todos.map(({ id, text, done }) => (
            <TodoItem
              key={id}
              text={text}
              done={done}
              onCheck={() => changeTodoState(id)}
            />
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

export default TodoList

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 100 },
  title: {
    fontFamily: 'Pacifico Regular',
    color: '#2DA0A5',
    fontSize: 40,
    marginBottom: 20
  },
  newTodoInput: {
    marginVertical: 15,
    width: 300
  }
})
