import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'

const Profile = () => {
  return (
    <View style={styles.center}>
      <Icon name='user' size={80} color={'lightblue'} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})