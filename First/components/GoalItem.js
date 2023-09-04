import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    color: '#fff',
    padding: 8,
  },
});
