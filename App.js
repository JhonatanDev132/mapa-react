import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



export default function App() {

  const [localizacao, setLocalizacao] = useState({
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  const regiaoInicialMapa = {
    /* Brasil
    latitude: -10,
    longitude: -55, */

    // São Paulo
    latitude: -23.533773,
    longitude: -46.65529,

    /* Definição do zoom do mapa.
    Quanto menor, mais próximo o mapa */
    latitudeDelta: 40,
    longitudeDelta: 40,
  };

  const marcarLocal = (event) => {
    setLocalizacao({
      ...localizacao,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };


  return (
    <>
    <StatusBar barStyle="defalt" />
    <View>
      <MapView 
      style={styles.mapa} 
      initialRegion={regiaoInicialMapa}
      onPress={marcarLocal}
      mapType='standard'
      >
        <Marker coordinate={localizacao} draggable/>
      </MapView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  mapa: {
    height: "100%",
    width: "100%"
  }
});
