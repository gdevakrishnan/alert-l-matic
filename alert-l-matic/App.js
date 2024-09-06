import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { style } from './static/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Alert-L-Matic</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create(style);
