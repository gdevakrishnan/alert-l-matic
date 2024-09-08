import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alert-L-Matic</Text>
            <Text style={styles.subtitle}>Landslide Alert System</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Welcome to Alert-L-Matic, your reliable landslide alert system.
                </Text>
                <Text style={styles.infoText}>
                    Our system provides real-time alerts and information to help you stay safe.
                </Text>
                <Text style={styles.infoText}>
                    Monitor landslide risks and receive timely notifications to ensure your safety and preparedness.
                </Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Stay safe and informed!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#00796b',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#004d40',
        marginBottom: 20,
    },
    infoContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        width: '100%',
        maxWidth: 600,
    },
    infoText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    footer: {
        marginTop: 30,
        padding: 10,
    },
    footerText: {
        fontSize: 16,
        color: '#00796b',
    },
});

export default Home;
