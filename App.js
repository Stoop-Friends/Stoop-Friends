import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Map from './components/Map';
import Post from './components/Post';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Welcome to Super-Stooper</Text>
      <Map />
      <Post />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    marginTop: 90,
    textAlign: 'center',
    fontSize: 25,
  },
});
