import { View, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Constants from 'expo-constants'
// Services
import beer_services from '../services/BeerServices';
//Context
import FilterContext from '../context/FilterContext';
//Components
import BeerList from '../components/BeerList'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { Text } from 'react-native-paper';
import Filter from '../components/Filter';

const Home = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [beerList, setBeerList] = useState([]);
  const [active, setActive] = useState();

  const formValue = useMemo(
    () => ({
      form,
      setForm,
    }),
    [form]
  );

  const loadMoreItem = () => {
    if (beerList.length >= 4) {
      setForm({ ...form, per_page: form.per_page + 25 })
      getBeers()
    } else { null }
  }

  const onRefresh = async () => {
    setLoading(true);
    setActive(false);
    const response = await beer_services.GetBeers(form);
    if (response.status === 200) {
      setBeerList(response.data);
    }
    setLoading(false);
  }

  const onClearFilter = async () => {
    setForm({ per_page: 25 })
    setLoading(true);
    setActive(false);
    const response = await beer_services.GetBeers({ per_page: 25 });
    if (response.status === 200) {
      setBeerList(response.data);
    }
    setLoading(false);
  }

  const onChangebeerName = (e) => {
    if (!e) {
      setForm({ ...form, beer_name: null })
    } else {
      setForm({ ...form, beer_name: e });
    }
  };

  const getBeers = useCallback(async () => {
    setLoading(true);
    setActive(false);
    const response = await beer_services.GetBeers(form);
    if (response.status === 200) {
      setBeerList(response.data);
    }
    setLoading(false);
  }, [form]
  );

  const closeFilters = () => {
    setActive(false)
  }

  useEffect(() => {
    setForm({ ...form, per_page: 25 });
    getBeers();
  }, []);

  return (
    <FilterContext.Provider value={formValue}>
      <ScrollView style={styles.whiteContainer}>
        <View>
          <Header title={"Venta Distribution"} />
          <Text variant="headlineLarge" style={styles.text}>Drinks</Text>
          <SearchBar
            onClearIconPress={onClearFilter}
            searchQuery={form.beer_name}
            onChangeSearch={onChangebeerName}
            loading={loading}
            onIconPress={getBeers}
          />
          <TouchableOpacity onPress={() => setActive(!active)}>
            <Text variant="bodyLarge" style={styles.leftText}>Filters</Text>
          </TouchableOpacity>
          {active &&
            <Filter
              form={form}
              onSearch={getBeers}
              closeFilters={closeFilters}
              onClearFilter={onClearFilter} />
          }
        </View>
      </ScrollView>
      <View style={styles.container}>
        <BeerList list={beerList} refreshing={loading} onRefresh={onRefresh} loadMoreItem={loadMoreItem} />
      </View>
    </FilterContext.Provider>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexGrow: 70,
    backgroundColor: '#fff'
  },
  whiteContainer: {
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        marginTop: Constants.statusBarHeight,
      },
    })
  },
  text: {
    padding: 15,
  },
  leftText: {
    textAlign: "right",
    marginHorizontal: 20,
    color: "#a53860",
    textDecorationLine: "underline"
  }
});
