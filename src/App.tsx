import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Player = {
  turn: number;
  points: number;
};

type Props = {
  player: Player;
};

const PlayerStats = ({ player }: Props) => (
  <>
    <Text>Turn: {player.turn}</Text>
    <Text>Points: {player.points}</Text>
  </>
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on asdf app!</Text>
        <PlayerStats player={{ turn: 1, points: 10 }} />
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
});
