import React from 'react'
import { View, StyleSheet, Image, TextInput, Button, Text, Pressable } from 'react-native'



const Login = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/logo.jpeg')}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="visible-password"
        />

        <Pressable
          onPress={() => alert('pressed')}
        >
          <Text style={styles.forgotText}>Forgot password ?</Text>
        </Pressable>

        <Button
          onPress={() => navigation.navigate('HomePage')}
          style={styles.button} width="100" color="#0b6fc2" title="LOGIN" />

        <Text style={styles.termsText}>By Logging in, you agree to our Terms & Conditions and Privacy Policy</Text>


        <Text style={styles.bottomText}>Don't have an Account? <Text onPress={() => navigation.navigate("Signup")} style={styles.signup}>Sign up</Text></Text>
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
  forgotText: {
    textAlign: 'right',
    marginBottom: 20,
    marginTop: 10
  },
  button: {
    marginVertical: 20,
    paddingHorizontal: 22
  },
  termsText: {
    textAlign: 'center',
    marginTop: 20
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,

  },
  signup: {
    color: '#0b6fc2',
    fontSize: 12,
  }
})

export default Login
