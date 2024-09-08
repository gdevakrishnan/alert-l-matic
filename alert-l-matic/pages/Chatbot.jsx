import React, { useState, Fragment } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { chat } from '../serviceWorker/serviceWorker';

function Chatbot() {
  const initialState = {
    type: "disaster",
    query: "",
    userText: ""
  }

  const [state, setState] = useState(initialState);
  const [bot, setBot] = useState(null);

  const handleSubmit = () => {
    if (state.type && state.userText.trim().length > 0) {
      setState({ ...state, "query": state.userText });
    }
    chat(state)
      .then((response) => {
        if (response.status == 200) {
          setBot(response.data);
        }
      })
      .catch((e) => console.log(e.message));
  };

  const handleClear = () => {
    setState(initialState); // Reset state to initial values
    setBot(null);
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <TextInput
          placeholder='Enter your query...'
          style={styles.textInput}
          onChangeText={(text) => {
            setBot(null);
            setState({ ...state, userText: text });
          }}
          value={state.userText} // Ensure controlled input
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.65}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClear}
            activeOpacity={0.65}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        (bot) ? (
          <ScrollView style={styles.chat}>
            <Text style={styles.text}>
              <Text style={{ color: 'red', fontWeight: '600' }}>You:</Text> {state.userText}
            </Text>
            <Text style={styles.text}>
              <Text style={{ color: 'green', fontWeight: '600' }}>Bot:</Text> {bot}</Text>
          </ScrollView>
        ) : null
      }
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInput: {
    color: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 4, // Optional: for rounded corners
  },
  buttonText: {
    color: '#fcfcfc', // White text color
  },
  chat: {
    backgroundColor: '#DEDEDE',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default Chatbot;
