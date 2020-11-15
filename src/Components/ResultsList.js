import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation'
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ResultShow',{id: item.id})}>
            <ResultDetails item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 13,
    marginTop: 10,
  },
});
