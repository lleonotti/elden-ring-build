import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList
} from 'react-native'
import React, { useState, useRef, ReactElement } from 'react'
import { Entypo } from '@expo/vector-icons'

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

const ListItem = ({ weapons }) => {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(undefined)
  const [dropdownTop, setDropdownTop] = useState(0)

  const DropdownButton = useRef(null)

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown()
  }

  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  )

  const onItemPress = (item): void => {
    setSelected(item)
    // onSelect(item)
    setVisible(false)
  }
  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h)
    })
    setVisible(true)
  }

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={[1, 2, 23, 4]}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  //   const renderItem = ({ item }): ReactElement<any, any> => (
  //     <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
  //       <Text>{item.label}</Text>
  //     </TouchableOpacity>
  //   )

  //   return (
  //     <Modal visible={visible} transparent animationType="none">
  //       <TouchableOpacity style={styles.container}>
  //         <View>
  //           {/* <Image style={styles.image} source={{ uri: `${weapons.image}` }} />
  //           <Text style={styles.itemName}>{weapons.name}</Text> */}
  //           <FlatList
  //             data={weapons}
  //             renderItem={renderItem}
  //             keyExtractor={(item, index) => index.toString()}
  //           />
  //         </View>
  //       </TouchableOpacity>
  //     </Modal>
  //   )
  // }

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Image style={styles.image} source={{ uri: `${weapons.image}` }} />
      <Text style={styles.itemName}>{weapons.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    zIndex: 1
  },
  buttonText: {
    flex: 1,
    textAlign: 'center'
  },
  image: {
    width: 75,
    height: 75
  },
  itemName: {
    fontSize: 18
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5
  },
  overlay: {
    width: '100%',
    height: '100%'
  }
})

export default ListItem
