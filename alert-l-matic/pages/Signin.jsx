import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import validator from "validator";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserDetails } from "../serviceWorker/serviceWorker";

const LoginScreen = ({ navigation }) => {
  const initialState = {
    "uname": "",
    "gmail": "",
    "pwd": ""
  }
  const [state, setState] = useState(initialState);

  const handleLogin = () => {
    if (state.uname.trim() == "" || state.gmail.trim() == "" || state.pwd.trim() == "") {
      alert("Enter all the fields");
      return;
    }

    if (!(validator.isEmail(state.gmail.trim()))) {
      setMsg("Invalid Email");
      return;
    }

    getUserDetails(state)
      .then((response) => {
        alert(response.message);
        if (response.message === "Login Successfully") {
          AsyncStorage.setItem("token", response.token);
          navigation.navigate('Home');
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Username" style={styles.input} onChangeText={(newText) => setState({ ...state, "uname": newText })}
          value={state.uname} />
        <MaterialIcons
          name="person-outline"
          size={24}
          color="gray"
          style={styles.icon}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} onChangeText={(newText) => setState({...state, "gmail": newText})}
          value={state.gmail}/>
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

      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signInContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signInText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
  forgotPassword: {
    color: "#3b7c3a",
    textAlign: "center",
    marginBottom: 15,
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#3b7c3a",
    borderRadius: 100,
    width: 200,
    marginLeft: 85,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    justifyContent: "center",
  },
  googleText: {
    marginLeft: 10,
    color: "gray",
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
    color: "gray",
  },
  signUpText: {
    textAlign: "center",
  },
  signUpLink: {
    color: "#3b7c3a",
  },
  signInButton: {
    width: 200,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 100,
    justifyContent: "center",
    textAlign: 'center',
  },
  signInButtonText: {
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
});

export default LoginScreen;
