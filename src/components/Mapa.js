import { Dimensions, Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, {Marker} from 'react-native-maps';

import * as Location from 'expo-location';




export default function Mapa() {
  const [initialLocation, setInitialLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if ( status !== "granted") {
        Alert.alert("Permissão de localização negada");
        return;
      }

      let initialLocation = await Location.getCurrentPositionAsync({});

      setInitialLocation(initialLocation);
      setCurrentLocation(initialLocation);
    })();
  },[]);

  useEffect(() => {
    if (currentLocation) {
      const {latitude, longitude} = currentLocation.coords;

      if (mapRef.current) {
        mapRef.current.animateToRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.05
        });
      }
    }
  },[currentLocation]);

  const mapRef = React.createRef();


 

  return (
    <View>
      {initialLocation && (
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: initialLocation ? initialLocation.coords.latitude : -23.55052,
          longitude: initialLocation ? initialLocation.coords.longitude : -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
          <Marker
          coordinate={{
            latitude: initialLocation.coords.latitude,
            longitude: initialLocation.coords.longitude,
          }}
          title="Sua localização inicial"
          description="Você começou aqui"
          />

        {currentLocation && (
          <Marker 
          coordinate={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          }} 
          title="Sua Localização Atual"
          />
          
        )}
      </MapView>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    map: {
        width: '100%',
        height: '100%',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      },
})