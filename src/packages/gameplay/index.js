import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';

const Gameplay = (props) => {
  return (
    <$GlobalContainer>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Affinity')}>
          <Text style={styles.link}>Weekly Element Affinities</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Boost')}>
          <Text style={styles.link}>Power Boosts</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Loss')}>
          <Text style={styles.link}>Power Loss</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Voting')}>
          <Text style={styles.link}>Voting Rules</Text>
        </Pressable>
      </View>
      <View style={styles.contentLinks}>
        <Pressable onPress={() => props.setPage('Suggestions')}>
          <Text style={styles.link}>Suggestions</Text>
        </Pressable>
      </View>
    </$GlobalContainer>
  );
};

export default Gameplay;
