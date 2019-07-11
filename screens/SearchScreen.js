import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../base-ui/SearchBar';

export default function SearchScreen() {
  return (
    <ScrollView>
      <SearchBar/>
    </ScrollView>
  );
}

SearchScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
