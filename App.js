import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Choices from "./Choices";

export const NIC = 0;
export const ROCK = 1;
export const PAPER = 2;
export const SCISSORS = 3;

export default function App() {
  const [player, setPlayer] = useState(NIC);
  const [computer, setComputer] = useState(NIC);
  const [result, setResult] = useState(0);

  const Resolve = (p, c) => {
    if (p === c) return 0;
    if ((p === ROCK && c === SCISSORS) || (p === SCISSORS && c === PAPER) || (p === PAPER && c === ROCK) ) return 1;
    return -1;
  }

  const Choose = (choice) => {
    setPlayer(choice);
    let c = Math.floor(Math.random() * 3 + 1);
    setComputer(c);
    setResult(Resolve(choice, c));
  }

  return (
    <View style={styles.container}>
      <Text>Počítač</Text>
      <Choices choice={computer} setChoice={null} />
      <Text>Hráč</Text>
      <Choices choice={player} setChoice={Choose} />
      <Text>Výsledek</Text>
      <Text>{result === 0 ? "Remíza" : result === 1 ? "Hráč" : "Počítač"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
