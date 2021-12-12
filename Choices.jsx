import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import {ROCK, PAPER, SCISSORS} from "./App";


const Choices = ({choice, setChoice}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity = { .5 } onPress={e => {setChoice ? setChoice(ROCK) : null}}>
                <Image 
                    style={[styles.icon, {backgroundColor: choice === ROCK ? "yellow" : "transparent"}]}
                    source={require("./assets/rock.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={e => {setChoice ? setChoice(PAPER) : null}}>
                <Image 
                    style={[styles.icon, {backgroundColor: choice === PAPER ? "yellow" : "transparent"}]}
                    source={require("./assets/paper.png")}
                    />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={e => {setChoice ? setChoice(SCISSORS) : null}}>
                <Image 
                    style={[styles.icon, {backgroundColor: choice === SCISSORS ? "yellow" : "transparent"}]}
                    source={require("./assets/scissors.png")}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    icon: {
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: "red"
    }
  });

export default Choices;