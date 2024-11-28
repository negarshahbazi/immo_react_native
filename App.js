import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Annonces from './screens/Annonces';  // صفحه اصلی شما
import AnnonceDetails from './screens/AnnonceDetails';  // صفحه جزئیات آگهی

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Annonces} />
        <Stack.Screen name="AnnonceDetails" component={AnnonceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
