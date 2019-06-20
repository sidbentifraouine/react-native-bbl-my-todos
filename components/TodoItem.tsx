import React, { FunctionComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'

interface TodoProps {
  text: string
  done: boolean
  onCheck: any
}

const TodoItem: FunctionComponent<TodoProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            textDecorationLine: props.done ? 'line-through' : 'none'
          }
        ]}
      >
        {props.text}
      </Text>
      <CheckBox
        checked={props.done}
        checkedColor='#39bcc2'
        onPress={props.onCheck}
      />
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafb',
    paddingLeft: 10,
    paddingVertical: 0,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#39bcc2',
    borderStyle: 'solid',
    borderWidth: 2,
    shadowColor: '#39bcc2',
    shadowOpacity: 1,
    shadowOffset: { height: 5, width: -5 },
    shadowRadius: 0
  },
  text: {
    color: '#364040',
    fontSize: 15,
    fontWeight: '500'
  }
})
