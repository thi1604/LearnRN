import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import { useSelector } from "react-redux";
import { EditTask } from "../../EditTask/EditTask";
import { RootState } from "../../store";
import { CreateTask } from "../CreateTask/CreateTask";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, des: string, avatar:string, id: string},
  Login: undefined,
  Logout: undefined
};

const Drawer = createDrawerNavigator<RootStackParams>()

export const MyApp = () => {
  const isLogin = useSelector((state: RootState) => state.checkLogin.value);
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login'>
          {isLogin == true && (
            <Drawer.Screen name='Home' component={Home}/>
          )}
          {isLogin == true && (
            <Drawer.Screen name='CreateTask' component={CreateTask}/>
          )}
          {isLogin == false && (
            <Drawer.Screen name='Login' component={Login}/>
          )}
          {isLogin == true && (
            <Drawer.Screen name='Logout' component={Logout}/>
          )}
          {isLogin == true && (
            <Drawer.Screen name='EditTask' component={EditTask}/>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}