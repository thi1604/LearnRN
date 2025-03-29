import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../features/counter";
import { RootState } from "../../store";
import { fetchData } from "../../store/storeCookies";

type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: undefined;
  Login: undefined
};

export const ButtonCreate = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  // const getValue = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch();
  const handleCreateTask = async () => {
    const token = await fetchData('tokenUser');
    // console.log(token);
    if(token){
      navigation.navigate("CreateTask")
    }
    else{
      navigation.navigate("Login")
    }
    // dispatch(increment())
  }
  return (
      <TouchableOpacity  style={[styles.buttonStyle, styles.textAlign]} onPress={handleCreateTask}>
        <View>
          <Text style={[styles.textStyle]}>+</Text>
        </View>
      </TouchableOpacity >

  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    // position: 'absolute',
    width: 70,
    height: 70,
    backgroundColor: "#9395D3",
    borderRadius: 50,
    // right: 15,
    // bottom: 130,
    // zIndex: 99,
    // elevation: 100 // using zIndex for Android
  },
  textAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 23,
  }
}
)