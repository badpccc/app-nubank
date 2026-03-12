import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function Busca() {
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor="white" // deixa o placeholder branco
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: "transparent",     
    borderWidth: 1,                     
    borderColor: "white",               
    borderRadius: 25,                   
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: "white",                      
    fontSize: 16,
  },

});