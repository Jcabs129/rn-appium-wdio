import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Open up App.js to start working on your App!
        </Text>
        <Text style={[styles.mediumText, styles.textStyle]}>Tesla, Inc</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: 'blue',
    // backgroundColor: 'blue',
    fontSize: 30,
    marginBottom: 10,
  },
});
