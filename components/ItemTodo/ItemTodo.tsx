import { Button, Image, StyleSheet, Text, View } from "react-native"
import { ButtonIcon } from "../Buttons/ButtonIcon";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { AppDispatch} from "../../store";
import { backItem, finishedItem, removeItem } from "../../features/listItem";


export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, avatar: string, description: string}
};

type propsType = {
  data: {
    _id: string,
    title: string,
    avatar: string,
    description: string,
    deleted: boolean,
    isDone : boolean
  }
}

export const ItemTodo = (props:propsType) => {
  const data = props.data;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch<AppDispatch>();
  const handleEdit = () => {
    navigation.navigate("EditTask", props.data);
  }
  const handleDelete = () => {
    dispatch(removeItem(data._id));
  }
  const handleDone = () => {
    dispatch(finishedItem(data._id));
  }
  const handleBack = () => {
    dispatch(backItem(data._id));
  }
  return (
    <>
      <View style={styles.itemStyle}>
        <View>
          <View>
            <Text style={{ fontSize: 13, color: "#9395D3", marginBottom: 5 }}>{data.title}</Text>
          </View>
          <View 
            style= {styles.imageStyle}
          >
            <Image 
              source={{uri: data.avatar}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 20
              }}
            />
          </View>
        </View>
          {data.isDone == false ? 
            <View style={{ display: "flex", flexDirection: 'row', gap: 3 }}>
              <ButtonIcon title="edit" onClick={handleEdit} />
              <ButtonIcon title="delete" onClick={handleDelete} />
              <ButtonIcon title="done" onClick={handleDone} />
            </View>
            :
            <View style={{ display: "flex", flexDirection: 'row', gap: 3 }}>
              <ButtonIcon title="Finished" onClick={handleDelete} />
              <ButtonIcon title="Back" onClick={handleBack} />
            </View>
          }
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#FFFFFF",
    width: 400,
    height: 100,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 19,
    paddingRight: 28,
    marginBottom: 21
  },
  icon: {
    color: '#9395D3',
    fontSize: 15,
    fontWeight: "600"
  },
  imageStyle: {
    width: 50,
    height: 50
  }

})