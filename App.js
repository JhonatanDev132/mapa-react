import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



export default function App() {
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

  /* Coordenadas para o Marker que será aplicado ao MapView */
  const localizacao = {
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  }
  return (
    <>
    <StatusBar barStyle="defalt" />
    <View>
      <MapView 
      style={styles.mapa} 
      initialRegion={regiaoInicialMapa}
      mapType="standard"
      userInterfaceStyle="dark"
      /* maxZoomLevel={15}
      minZoomLevel={5} */
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
