import React, {useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getList} from '../redux/actions';

const LookContacts = () => {
  // Hook to store and retrieve the jsonplaceholder object
  const {list} = useSelector(state => state.listReducer);

  // Hook to manage the search query
  const [searchQuery, setSearchQuery] = React.useState('');

  // Hook to match patterns
  const [pattern, setPattern] = React.useState('');

  // Apply change on store
  const dispatch = useDispatch();

  // Matching pattern
  const onChangeSearch = query => {
    if (query !== '') {
      setSearchQuery(query);
      dispatch(getList(global.copy));
      setPattern(
        list.filter(function (item) {
          if (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
            return item;
        }),
      );
    } else {
      setSearchQuery('');
      setPattern(global.copy);
    }
  };

  useEffect(() => {
    dispatch(getList(pattern));
  }, [pattern]);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchbar}
    />
  );
};

const styles = StyleSheet.create({
  searchbar: {
    width: '70%',
  },
});

export default LookContacts;
