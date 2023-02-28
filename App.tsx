import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function EingabeSeite() { 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hallo Kilometerumrechnung</Text>
      <Button title="Berechnung ausführen" />
    </View>
  );
}

const Stack = createNativeStackNavigator(); // Stack-Objekt hat Attribute "Navigation" und "Screen"

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={EingabeSeite} />
      </Stack.Navigator>
    </NavigationContainer>
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
