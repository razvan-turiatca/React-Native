import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const Focus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Feature</Text>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});
