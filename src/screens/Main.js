import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
// Services
import beer_services from '../services/BeerServices';
//Components
import BeerList from '../components/BeerList'

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [beerList, setBeerList] = useState([]);

  const onRefresh = React.useCallback(async () => {
    setLoading(true);
    await getBeers();
  }, [loading]);

  const getBeers = async () => {
    setLoading(true);
    const response = await beer_services.GetBeers();

    console.log(response)
    if (response.status === 200) {
      setBeerList(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBeers();
  }, []);


  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <BeerList list={beerList} refreshing={loading} onRefresh={onRefresh} />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
