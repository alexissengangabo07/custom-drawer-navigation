import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Message = () => {
  return (
    <View>
      <Text>Message</Text>
      <Icon name='message' size={40} color={'blue'} />
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})