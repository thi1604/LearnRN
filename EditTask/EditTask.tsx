import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, View } from "react-native"
import { useDispatch } from "react-redux";
import { ButtonHandle } from "../components/Buttons/ButtonHandle"
import {editItem} from "../features/listItem";
import { AppDispatch } from "../store";

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {id: string, title: string, avatar: string, description: string}
};


export const EditTask = () => {
  const route = useRoute<RouteProp<RootStackParams, 'EditTask'>>();
  const data = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handdleUpdateTask = () => {
    dispatch(editItem({id: data.id, title: data.title, des: data.description}));
  }
  const handdleCancelUpdateTask = () => {
    navigation.navigate("Home");
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}> 
          <TextInput style={styles.input} placeholder="Title" value={data.title}/>
          <TextInput style={[styles.input]} placeholder="Detail" value={data.description}/>
          <View style={styles.Control}>
            <ButtonHandle title="Update" onClick={handdleUpdateTask} style={styles.styleButton}/>
            <ButtonHandle title="Cancel" onClick={handdleCancelUpdateTask} style={styles.styleButton}/>
          </View>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 100,
    
  },
  body: {
    marginTop: 14,
    marginHorizontal: 20
  },
  input: {
    height: 40,
    width: '100%',
    // backgroundColor: '#9395D3',
    // paddingHorizontal: 15,
    marginTop: 43,
    borderBottomColor: '#8B8787',
    borderBottomWidth: 2
  },
  styleButton: {
    width: 170,
    height: 65,
    backgroundColor: '#9395D3',
    borderRadius: 20,
    marginTop: 54
  },
  Control: {
    flexDirection: "row",
    gap: 30
  }
})