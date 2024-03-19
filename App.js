import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mapa from './src/screen/Mapa';


export default function App() {
  return (
    <>
    <StatusBar barStyle="defalt" />
    <Mapa />
    </>
  );
}

const styles = StyleSheet.create({
});
