import React from 'react'
import { View, StyleSheet, Image, TextInput, Button, Text, Pressable } from 'react-native'



const Signup = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/logo.jpeg')}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Signup</Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter email"
        />

        <TextInput
          style={styles.input}
          placeholder="Create Password"
        />

        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="Confirm Password"
        />


        <Button
          onPress={() => navigation.navigate('HomePage')}
          style={styles.button} width="100" color="#0b6fc2" title="REGISTER" />

        <Text style={styles.bottomText}>Already have an Account? <Text onPress={() => navigation.navigate("Login")} style={styles.signup}>Sign in</Text></Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f7f6f1',
    height: '100%'
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  formContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20
  },
  image: {
    width: 290,
    height: 290,
    marginHorizontal: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  lastInput: {
    marginBottom: 20
  },
  button: {
    marginVertical: 20,
    paddingHorizontal: 22
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 30,
  },
  signup: {
    color: '#0b6fc2',
    fontSize: 12,
  }
})

export default Signup
