import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// Create a custom drawer content component - Navbar
function Navbar(props) {
    const {
        navigation
    } = props;

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                {/* <Image 
            source={{ uri: 'https://example.com/logo.png' }} // Replace with your logo URL
                  style={styles.logo}
            /> */}
                <Text style={styles.logoText}>LOGO</Text>
            </View>
            <DrawerItem
                label="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
                label="About"
                onPress={() => navigation.navigate('About')}
            />
            <DrawerItem
                label="Signup"
                onPress={() => navigation.navigate('Signup')}
            />
            <DrawerItem
                label="Signin"
                onPress={() => navigation.navigate('Signin')}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default Navbar;
