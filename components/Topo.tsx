import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Topo() {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../assets/nubank-logo-branco.png")}
        />
      </View>

      <Text style={styles.titulo}>Olá, Felipe Melo</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 20,
  },

  logo: {
    width: 120,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
  },

  titulo: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 5, // espaço da borda esquerda
  },

  containerLogo: {
    height: 150,
    alignItems: "center", // mantém só a logo centralizada
    justifyContent: "center",
  },
});