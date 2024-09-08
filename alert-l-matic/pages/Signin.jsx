import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const LoginScreen = () => {
  const handleLogin = () => {
    console.log("Login button pressed");
  };

  const handleGoogleSignIn = async () => {
    console.log("SignIn with Google pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="User name" style={styles.input} />
        <MaterialIcons
          name="person-outline"
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
        />
        <MaterialIcons
          name="lock-outline"
          size={24}
          color="gray"
          style={styles.icon}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <Button mode="contained" style={styles.loginButton} onPress={handleLogin}>
        Login
      </Button>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
      >
        <MaterialIcons size={24} color="gray" />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <Text style={styles.signUpText}>
        New account?
        <TouchableOpacity>
          <Text style={styles.signUpLink}> Sign-up.</Text>
        </TouchableOpacity>
      </Text>
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
});

export default LoginScreen;
