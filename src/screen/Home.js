import { Dimensions, ScrollView, StyleSheet, Text, View, Animated, PanResponder } from 'react-native';
import React, { useState } from 'react';
import Mapa from '../components/Mapa';

export default function Home() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [helloWorldHeight] = useState(new Animated.Value(150));

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
          // Habilita o pan responder apenas quando o gesto é vertical
          const { dx, dy } = gestureState;
          return Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5; // Permitindo movimentos verticais
        },
        onPanResponderMove: (evt, gestureState) => {
          // Atualiza a altura da tela "Hello World" com base no movimento vertical do gesto
          const { dy } = gestureState;
          const newHeight = Math.max(0, 150 - dy); // Limita a altura mínima
          helloWorldHeight.setValue(newHeight);
        },
        onPanResponderRelease: (evt, gestureState) => {
          // Ao soltar o gesto, decide se deve mostrar ou ocultar a tela "Hello World"
          const { dy } = gestureState;
          if (dy > 50) {
            // Se o gesto for para baixo mais de 50 pixels, oculta a tela "Hello World"
            Animated.timing(helloWorldHeight, {
              toValue: 150,
              duration: 300,
              useNativeDriver: false,
            }).start(() => setShowHelloWorld(false));
          } else if (dy < -50) {
            // Se o gesto for para cima mais de 50 pixels, mostra a tela "Hello World" com altura de 500
            Animated.timing(helloWorldHeight, {
              toValue: 800,
              useNativeDriver: false,
            }).start(() => setShowHelloWorld(true));
          }
        },
      }),
    [helloWorldHeight]
  );

  return (
    <View style={styles.container}>
      <Mapa style={styles.mapa} />

      <Animated.View {...panResponder.panHandlers} style={[styles.tela, { height: helloWorldHeight }]}>
        <Text>Hello world</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative', // Adicionado para permitir o posicionamento absoluto dos elementos filhos
  },
  tela: {
    position: 'absolute', // Posicionamento absoluto para sobrepor outros elementos
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Garante que a tela "Hello World" esteja acima do mapa
  },
  mapa: {
    ...StyleSheet.absoluteFillObject, // Ocupa toda a tela
    zIndex: 1, // Garante que o mapa esteja abaixo da tela "Hello World"
  },
});
