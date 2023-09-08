import { useState } from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import tinycolor from 'tinycolor2';

const CategoryGridTile = ({ title, color, onPress }) => {
  const lighter = tinycolor(color).lighten(20).toString();

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: lighter }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: deviceWidth < 410 ? 130 : 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
