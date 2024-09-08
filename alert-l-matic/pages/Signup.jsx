import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Sign Up:', { firstName, lastName, email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
      </View>

      <Text style={styles.termsText}>
        By clicking sign up, you agree to Alert-L-Matic's User Agreement, Privacy Policy, and Cookie Policy.
      </Text>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signInText}>Sign-in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.googleSignInButton}>
        <FontAwesome name="google" size={20} color="white" />
        <Text style={styles.googleSignInButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  icon: {
    padding: 10,
  },
  termsText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  signUpButton: {
    width: 200,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 100,
    marginBottom: 10,
    marginLeft: 85,
    justifyContent: "center",
    textAlign: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: 'center',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#007bff',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  googleSignInButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: "#ccc",
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleSignInButtonText: {
    color: '#4285F4',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
