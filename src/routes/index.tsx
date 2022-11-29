import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import Details from '@screens/Details';
import screenRoutes from './screenRoutes';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenRoutes.Home} component={Home} />
      <Stack.Screen name={screenRoutes.Details} component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
