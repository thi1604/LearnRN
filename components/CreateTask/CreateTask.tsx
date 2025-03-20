// import { Text } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ButtonHandle } from "../Buttons/ButtonHandle";


export const CreateTask = () => {
  const handdleAddTask = () => {
    console.log("Added new task!")
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}> 
          <TextInput style={styles.input} placeholder="Title"/>
          <TextInput style={[styles.input]} placeholder="Detail"/>
          <ButtonHandle title="ADD" onClick={handdleAddTask} style={styles.styleButton}/>
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
    marginHorizontal: 29
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
    width: '100%',
    height: 65,
    backgroundColor: '#9395D3',
    borderRadius: 20,
    marginTop: 54
  }
})