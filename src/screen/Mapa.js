import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

export default function Mapa() {
  return (
    <View>
      <MapView style={styles.map}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    map: {
        width: '100%',
        height: '100%',
      },
})