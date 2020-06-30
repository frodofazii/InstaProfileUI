import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import search from "./src/search";
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function plusAdd() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Plus Add</Text>
    </View>
  );
}
function heart() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Heart</Text>
    </View>
  );
}function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>profile</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="search" component={search} />
        <Tab.Screen name="Add" component={plusAdd} />
        <Tab.Screen name="heart" component={heart} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}