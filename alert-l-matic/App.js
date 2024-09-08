import React, { Fragment, useEffect, useState } from 'react';
import Router from './routers/Router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userVerify } from './serviceWorker/serviceWorker';

function App() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await userVerify({ token });

          if (response.message === "Verified User") {
            setUserDetails(response.data);
          } else {
            setUserDetails(null);
          }
        } else {
          setUserDetails(null);
        }
      } catch (error) {
        console.error('Error verifying user:', error.message);
        setUserDetails(null);
      }
    };

    checkUser();
  }, []);

  return (
    <Fragment>
      <Router userDetails={userDetails} />
    </Fragment>
  );
}

export default App;
