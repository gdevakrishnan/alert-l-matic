import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { style } from '../static/style';

function Home({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            {/* <Button title="Go to About" onPress={() => navigation.navigate('About')} /> */}
        </View>
    );
}

const styles = StyleSheet.create(style);

export default Home;