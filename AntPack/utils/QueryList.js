import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getList} from '../redux/actions';

/* Importing the component where the name
of the employee is rendered */
import CardName from '../utils/CardName';

/* Component to retrieve data from an external
URL */
const QueryList = ({nav}) => {
  
  // Hook to store and retrieve the jsonplaceholder object
  const {list} = useSelector(state => state.listReducer);

  // Hook to acknowledge the state of the fetch
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // Using the async fetch call to connect to the given URL
  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
                      dispatch(getList(json));
                      global.copy = json;})
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  // Run just once
    useEffect(() => {
      setLoading(true);
      getUsers();
    }, []);

  return (
    <View style={{padding: 20}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={list}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => <CardName id ={item.id} name={item.name} nav={nav} />}
        />
      )}
    </View>
  );
};
export default QueryList;
