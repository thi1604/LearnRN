import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateTask } from './components/CreateTask/CreateTask';
import { Home } from './components/Home/Home';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParams = {
  Home: undefined;
  Created: undefined;
};


const RootStack = createNativeStackNavigator<RootStackParams>();


function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='Home'>
          <RootStack.Screen name='Home' component={Home}/>
          <RootStack.Screen name='CreateTask' component={CreateTask}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
