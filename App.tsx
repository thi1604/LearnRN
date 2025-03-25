import React, { useState } from 'react';
import { CreateTask } from './components/CreateTask/CreateTask';
import { Home } from './components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { EditTask } from './EditTask/EditTask';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, subTitle: string},
  Login: undefined,
  Logout: undefined
};

const Drawer = createDrawerNavigator<RootStackParams>()

function App(): JSX.Element {
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home}/>
          <Drawer.Screen name='CreateTask' component={CreateTask}/>
          <Drawer.Screen 
            name='Login' 
            component={Login}
            // options = {isLogin? {drawerLabel: () => null} : {drawerLabel: () => true}} 
          />
          <Drawer.Screen 
            name='Logout' 
            component={Logout}
            // options = {isLogin? {drawerLabel: () => null} : {drawerLabel: () => true}} 
          />
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
