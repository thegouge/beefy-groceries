import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

interface Props {
  addFunction: (arg: string) => void
}

export const AddForm = ({addFunction}: Props) => {
  const [newItemText, setNewItemText] = useState('')

  const handleSubmit = () => {
    if(newItemText === '') {
      return
    }
    addFunction(newItemText)
    setNewItemText('')
  }

  return (
    <View>
      <TextInput value={newItemText} onChangeText={(text) => setNewItemText(text)} />
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  )
}
