import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import React, { Fragment } from 'react'
import { StatusBar } from 'react-native';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Chatbot from '../pages/Chatbot';

function Router() {
  const Drawer = createDrawerNavigator();

  return (
    <Fragment>
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
            headerTitle: 'Alert-L-Matic', // Set title here
            headerStyle: {
              backgroundColor: '#007bff', // Header background color
            },
            headerTitleStyle: {
              color: '#fff', // Title text color
            },
            headerTintColor: '#ffffff' // change bar clor
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Signup" component={Signup} />
          <Drawer.Screen name="Signin" component={Signin} />
          <Drawer.Screen name="Chat" component={Chatbot} />
        </Drawer.Navigator>
      </NavigationContainer>
      
      <StatusBar barStyle={'light-content'}/>
    </Fragment>
  )
}

export default Router
