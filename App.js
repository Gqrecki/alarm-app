import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Start from './components/Start';
import Add from './components/Add';
import Database from './components/Database';
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
   useEffect(() => {
      Database.createTable("alarms");
      // Database.dropTable();
    }, []);
  return (
    <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Start"
               component={Start}
               options={{
                  headerShown: false,
               }} />
            <Stack.Screen 
            name="Main" 
            component={Main}
            options={{
               headerStyle: {
                  backgroundColor: '#636363',
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
               },
               headerTintColor: '#47ffcc',
               headerTitleAlign: 'center',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}  />  
            <Stack.Screen
            name="Add"
            component={Add}
            options={{
               headerStyle: {
                  backgroundColor: '#636363',
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
               },
               headerTintColor: '#47ffcc',
               headerTitleAlign: 'center',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}
            />  
         </Stack.Navigator>
      </NavigationContainer>
  );
}

