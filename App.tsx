import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateTask } from './components/CreateTask/CreateTask';
import { Home } from './components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { EditTask } from './EditTask/EditTask';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from '@react-navigation/stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'; 


const options : NativeStackNavigationOptions = {
  headerShown: false
}

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, subTitle: string}
};



const RootStack = createNativeStackNavigator<RootStackParams>();


function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='Home'>
          <RootStack.Screen name='Home' component={Home} options={options}/>
          <RootStack.Screen name='CreateTask' component={CreateTask} options={options}/>
          <RootStack.Screen name='EditTask' component={EditTask} options={options}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
