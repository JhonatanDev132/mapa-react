import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';



export default function App() {
  const regiaoInicialMapa = {
    latitude: -10,
    longitude: -55,

    /* Definição do zoom do mapa.
    Quanto menor, mais próximo o mapa */
    latitudeDelta: 40,
    longitudeDelta: 40,
  };
  return (
    <>
    <StatusBar barStyle="defalt" />
    <View>
      <MapView 
      style={styles.mapa} 
      initialRegion={regiaoInicialMapa}
      mapType="standard"
      userInterfaceStyle="dark"
      maxZoomLevel={15}
      minZoomLevel={5}
      />
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
