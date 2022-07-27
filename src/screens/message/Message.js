import { StyleSheet,  View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Message = () => {
  return (
    <View style={styles.center}>
      <Icon name='message' size={80} color={'lightblue'} />
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})