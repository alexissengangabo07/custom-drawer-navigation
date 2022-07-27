import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Setting = () => {
  return (
    <View style={styles.center}>
      <Icon name="cog" color={"lightblue"} size={80} />
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})