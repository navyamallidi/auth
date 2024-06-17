import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '@/redux/store'; // Assuming the store is in '@/redux/store'
import LoginSignupScreen from '@/components/login/login';
import Home from '@/components/login/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="LoginSignup">
          <Stack.Screen
            name="LoginSignup"
            component={LoginSignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
