import { useNavigation } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CreateTask } from "../CreateTask/CreateTask";


export const ButtonCreate = () => {
  const navigation = useNavigation();
  return (
      <TouchableOpacity  style={[styles.buttonStyle, styles.textAlign]} onPress={() => navigation.navigate("CreateTask")}>
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