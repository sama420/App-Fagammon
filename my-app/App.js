import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import Title from './src/components/Title/'
import Main from './src/components/Main/'
import Imagem from './src/components/Image/'

export default function App() {
  return (
      <LinearGradient colors={['#00F5A0', '#00D9F5']}>
        <View style={styles.container}>
          <Imagem/>
          <Title/>
          <Main/>
        </View>
      </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
});
