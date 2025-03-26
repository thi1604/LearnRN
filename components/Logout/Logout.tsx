import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet} from "react-native"
import { useDispatch } from "react-redux";
import { isLogout } from "../../features/checkLogin";
import { AppDispatch } from "../../store";
import { deleteData, fetchData } from "../../store/storeCookies";
import { ButtonHandle } from "../Buttons/ButtonHandle"

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, avatar: string, description: string};
  Login: undefined;
  Logout: undefined
};

export const Logout = ()=> {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = async () => {
    const token = await fetchData('tokenUser');
    if(token != null){
      await deleteData("tokenUser")
      dispatch(isLogout()) //Set global isLogout variable is false
    }
  }
  handleLogout();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleBackLogin = () => {
    navigation.navigate("Login")
  }
  return (
    <>
      <ButtonHandle title = "Login" style={styles.buttonBackLogin} onClick={handleBackLogin}/>
    </>
  )
}

const styles = StyleSheet.create({
  buttonBackLogin: {
    width: '100%',
    height: 65,
    backgroundColor: '#9395D3',
    borderRadius: 20,
    marginTop: 54
  }
})