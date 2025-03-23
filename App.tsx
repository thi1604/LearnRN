import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateTask } from './components/CreateTask/CreateTask';
import { Home } from './components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { EditTask } from './EditTask/EditTask';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, subTitle: string}
};

const Drawer = createDrawerNavigator<RootStackParams>()

function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='CreateTask' component={CreateTask}/>
          <Drawer.Screen 
            name='EditTask' 
            component={EditTask} 
            options= {{drawerLabel: () => null}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
