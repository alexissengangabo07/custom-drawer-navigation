import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Historic = () => {
  return (
    <View style={styles.center}>
        <Icon name='history' size={80} color={'lightblue'} />
    </View>
  )
}

export default Historic

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})