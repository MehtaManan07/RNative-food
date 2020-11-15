import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = (props) => {
  const [result, setResult] = useState(null);
  const id = props.navigation.getParam('id');
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  console.log(result);
  return (
    <View>
      <FlatList
        data={result && result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => <Image style={styles.imageStyle} source={{ uri: item }} />}
      />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 200
    }
});
