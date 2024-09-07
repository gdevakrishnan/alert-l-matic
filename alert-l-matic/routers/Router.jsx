import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Navbar from '../components/Navbar'

function Router() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <Navbar {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#fff', // Light background color for the drawer
                    },
                    drawerActiveTintColor: '#fff', // Color for text of active item
                    drawerActiveBackgroundColor: '#007bff', // Background color for active item
                    drawerInactiveTintColor: '#6c757d', // Color for text of inactive items
                    drawerLabelStyle: {
                        fontSize: 16, // Label font size
                    },
                }}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Signup" component={Signup} />
                <Drawer.Screen name="Signin" component={Signin} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Router
