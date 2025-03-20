import { Button, StyleSheet, Text, View } from "react-native"
import { ButtonIcon } from "../Buttons/ButtonIcon";
import React from "react";

export const ItemTodo = (props: any) => {
  const { data } = props;
  const handleEdit = () => {
    console.log("edit");
  }
  const handleDelete = () => {
    console.log("delete");
  }
  const handleDone = () => {
    console.log("done");
  }
  return (
    <>
      <View style={styles.itemStyle}>
        <View>
          <View>
            <Text style={{ fontSize: 13, color: "#9395D3", marginBottom: 5 }}>{data.title}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, color: "#000000" }}>{data.subTitle}</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: 'row', gap: 3 }}>
          {/* <Button title="Edit" color="#f194ff" onPress={() => {console.log("oke")}}></Button> */}
          {/* <View>
        </View> */}
          <ButtonIcon title="edit" onClick={handleEdit} />
          <ButtonIcon title="delete" onClick={handleDelete} />
          <ButtonIcon title="done" onClick={handleDone} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#FFFFFF",
    width: 400,
    height: 82,
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

})