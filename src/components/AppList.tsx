import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { TodoItem } from '../lib/types';

interface Props {
  dataList: TodoItem[]
}

export const AppList = ({dataList}: Props) => {

  return (
    <ScrollView>
      {dataList.map((item: TodoItem) => (<Card key={`${item.id}`}><Text>{item.text}</Text></Card>))}
    </ScrollView>  )
}
