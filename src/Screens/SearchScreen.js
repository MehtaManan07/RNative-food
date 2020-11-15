import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Searchbar from '../Components/Searchbar';
import UseResults from '../hooks/UseResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [searchApi, errMsg, results] = UseResults();

  const filterByPrice = (price) => {
    return results.filter(result => result.price === price)
  }

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        term={query}
        onTermChange={(newTerm) => setQuery(newTerm)}
        onTermSubmit={() => searchApi(query)}
      />

      {errMsg ? <Text style={styles.queryStyle}>{errMsg}</Text> : null}
      <ScrollView>
      <ResultsList results={filterByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterByPrice('$$')} title='Bit Pricier' />
      <ResultsList results={filterByPrice('$$$')} title='Bit Spender' />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  queryStyle: {
    alignItems: 'center',
    marginTop: 50,
  },
});
export default SearchScreen;
