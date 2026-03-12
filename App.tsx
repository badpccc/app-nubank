import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Topo from "./components/Topo";
import Busca from "./components/Busca";

export default function App() {

  return (
    <View style={styles.container}>

      <Topo />
      <Busca />

      <View style={styles.card}>

        <Text style={styles.titulo}>Cartão de Crédito</Text>

        <Text style={styles.sub}>Fatura</Text>

        <Text style={styles.valorCartao}>R$ 1.500,00</Text>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Pagar fatura</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.card}>

        <Text style={styles.valorConta}>Conta</Text>

        <Text style={styles.sub}>Saldo Disponível</Text>

        <Text style={styles.valorConta}>R$ 300,00</Text>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Transferir</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.botaoRodape}>
        <Text style={styles.textoBotaoRodape}>Meus Cartões</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#8B03BB",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },

  sub: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },

  valorCartao: {
    fontSize: 22,
    marginTop: -5,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#0099CC",  // azul
  },

  valorConta: {
    fontSize: 22,
    marginTop: -5,
    marginBottom: 15,
    fontWeight: "bold",
    color: "black",
  },

  botao: {
    backgroundColor: "white",      
    paddingVertical: 6,        
    paddingHorizontal: 16,     
    borderRadius: 20,          
    borderWidth: 2,            
    borderColor: "#8B03BB",    
    alignSelf: "flex-start",   
    marginTop: 10,
  },

  textoBotao: {
    color: "#8B03BB",
    fontWeight: "bold",
  },

  botaoRodape: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#0099CC",
    paddingVertical: 12,  
    paddingHorizontal: 20, 
    borderRadius: 25,      
    alignItems: "center",
  },

  textoBotaoRodape: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

});