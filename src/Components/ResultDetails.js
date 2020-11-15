import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ResultDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text> {item.rating} Stars, {item.review_count} ratings </Text>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  container: {
      marginHorizontal: 10
  }
});
