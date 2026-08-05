import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>⚽ FKPredictAI</Text>

      <Text style={styles.subtitle}>
        L'intelligence artificielle au service de vos pronostics.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 Matchs analysés</Text>
        <Text style={styles.number}>0</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Analyser un match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#22C55E",
    marginBottom: 15,
  },

  subtitle: {
    color: "#E5E7EB",
    textAlign: "center",
    marginBottom: 40,
    fontSize: 16,
  },

  card: {
    width: "100%",
    backgroundColor: "#1F2937",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 10,
  },

  number: {
    color: "#22C55E",
    fontSize: 40,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#22C55E",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
});
