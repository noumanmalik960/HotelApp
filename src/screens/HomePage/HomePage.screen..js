import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native'

const HomePage = () => {
  return (
    <View style={styles.root}>
      <Pressable onPress={() => alert('clicked')} style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/dilivery.jpg')}
        />
        <Text style={styles.imageText}>Take Away</Text>
      </Pressable>

      <Pressable onPress={() => alert('clicked')} style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/dinein-2.jpg')}
        />
        <Text style={styles.imageText}>Dine in</Text>
      </Pressable>

      <Pressable onPress={() => alert('clicked')} style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/home-dilivery.jpg')}
        />
        <Text style={styles.imageText}>Home dilivery</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#092032',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {

    color: '#fff',
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    marginBottom: 30
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 100
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8
  },
  imageText: {
    color: 'lightgrey',
    fontFamily: 'sans-serif-light',
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginLeft: 20
  }
})
export default HomePage
