import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Home = () => {
  return (
    <View style={styles.center}>
      <Icon name='home' size={80} color={'lightblue'} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})