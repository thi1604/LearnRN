import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet} from "react-native"
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
  const handleLogout = async () => {
    const isLogin = await fetchData('tokenUser');
    if(isLogin != null){
      await deleteData("tokenUser")
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