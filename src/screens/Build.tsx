import {
  View,
  Text,
  StatusBar,
  Image,
  SectionList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getClass } from '../services/ClassAPI.js'
import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
const Build = () => {
  const [classes, setClasses] = useState({})
  const [weapons, setWeapons] = useState([])

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  useEffect(() => {
    axios.get('https://eldenring.fanapis.com/api/classes').then((res) => {
      const dataLen = res.data.count
      setClasses(res.data.data[getRandomInt(0, dataLen)])
    })
    axios.get('https://eldenring.fanapis.com/api/weapons').then((res) => {
      const dataLen = res.data.count
      setWeapons(res.data.data[getRandomInt(0, dataLen)])
      console.log(res.data.data[0])
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={{ uri: `${classes.image}` }} />
      </View>
      <View style={styles.listContainer}>
        {/* <SectionList
          sections={[
            {
              title: 'Weapon',
              data: [weapons]
            }
          ]}
          renderItem={({ item }) => <ListItem weapons={weapons} />}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item) => `basicListEntry-${item}`}
        /> */}
        <ListItem weapons={weapons} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center'
  },
  listContainer: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10
  },
  cardContainer: {
    // width: 200,
    // height: 200,
    flex: 1,
    borderRadius: 8,
    borderWidth: 1
  },

  image: {
    resizeMode: 'contain',
    flex: 1,
    width: 200,
    height: 200
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

export default Build
