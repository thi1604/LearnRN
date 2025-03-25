// import { Text } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ButtonHandle } from "../Buttons/ButtonHandle";
import axios from "axios";
import { fetchData } from "../../store/storeCookies";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
})

axiosInstance.interceptors.request.use(async (config) => {
  const isLogin = await fetchData('tokenUser');
  if(isLogin != null){
    config.headers["Origin"] = "http://localhost:3001"
    config.baseURL = "http://10.0.2.2:3000";
  }
  return config;
  },
  (error) => {
    return error;
  }
)

axiosInstance.interceptors.response.use(response => {
    return response.data
  },
  (error) => {
    return Promise.reject('you need login'); //Dung promise.reject
  }
)

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setsubTitle] = useState('');
  const handdleAddTask = async () => {
    await axiosInstance.get('/topics/nhac-tre')
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error);
      return error
    })
    .finally(function () {
      // console.log("Added new task successfully!");
    })
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}> 
          <TextInput 
            style={styles.input} 
            onChangeText={newTitle => setTitle(newTitle)}
            placeholder="Title"
            value={title}
            />
          <TextInput 
            style={[styles.input]} 
            placeholder="Detail"
            onChangeText={newSubTitle => setsubTitle(newSubTitle)}
            value={subTitle}
            />
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