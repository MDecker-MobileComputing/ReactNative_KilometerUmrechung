import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <Text>Hallo Kilometerumrechnung</Text>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    marginHorizontal: "auto",
    marginTop: "20%"
  },
});

export default App;