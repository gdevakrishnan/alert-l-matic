import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import validator from 'validator';
import { createUserDetails } from '../serviceWorker/serviceWorker';

export default function Signup({ navigation }) {
  const initialState = {
    "uname": "",
    "gmail": "",
    "pwd": "",
    "cpwd": ""
  }
  const [state, setState] = useState(initialState);
  const handleSignUp = () => {
    if (state.uname.trim() == "" || state.gmail.trim() == "" || state.pwd.trim() == "" || state.cpwd.trim() == "") {
      alert("Enter all the fields");
      return;
    }

    if (state.pwd.trim() !== state.cpwd.trim()) {
      alert("Password Mismatch");
      return;
    }

    if (!(validator.isEmail(state.gmail.trim()))) {
      setMsg("Invalid Email");
      return;
    }

    createUserDetails(state)
    .then((response) => {
      alert(response.message);
      if (response.message === "Registered Successfully") {
        navigation.navigate('Signin');
        setState(initialState);
      }
    })
    .catch((e) => console.log(e.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Username"
          style={styles.input}
          onChangeText={(newText) => setState({...state, "uname": newText})}
          value={state.uname}
          />
        <MaterialIcons
          name="person-outline"
          size={24}
          color="gray"
          style={styles.icon}
          />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          onChangeText={(newText) => setState({...state, "gmail": newText})}
          value={state.gmail}
        />
        <MaterialIcons
          name="email"
          size={24}
          color="gray"
          style={styles.icon}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(newText) => setState({...state, "pwd": newText})}
          value={state.pwd}
        />
        <MaterialIcons
          name="lock-outline"
          size={24}
          color="gray"
          style={styles.icon}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(newText) => setState({...state, "cpwd": newText})}
          value={state.cpwd}
        />
        <MaterialIcons
          name="lock-outline"
          size={24}
          color="gray"
          style={styles.icon}
        />
      </View>

      <Text style={styles.termsText}>
        By clicking sign up, you agree to Alert-L-Matic's User Agreement, Privacy Policy, and Cookie Policy.
      </Text>

      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signInContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signInText}>Sign-in</Text>
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },
});
