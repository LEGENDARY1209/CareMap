import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import logoImage from './assets/LogoEmpire.png'

export default function App() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={logoImage}/>
    <Text= style{styles.titleText}>CareMap</Text</>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 64,
    width: 64
  },
  titleText: {}
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',
  }
});
