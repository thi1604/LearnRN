// import { Text } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ButtonHandle } from "../Buttons/ButtonHandle";
import axios from "axios";
import {saveData } from "../../store/storeCookies";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, avatar: string, description: string};
  Login: undefined;
  Logout: undefined
};


const axiosInstanceLogin = axios.create({
  baseURL: "http://10.0.2.2:3000",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Origin": "http://localhost:3001"
  },
});

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handdleLogin = async () => {
    await axiosInstanceLogin.post('/user/login', {
      email: email,
      password: password
    })
    .then(response => {
      const getToken = async () => {
        if(response.data.code == 200){
          await saveData("tokenUser", response.data.token);
          // console.log(await fetchData("tokenUser"));
          navigation.navigate("Home");
        }
      }
      getToken();
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}> 
          <TextInput 
            style={styles.input} 
            onChangeText={newTitle => setEmail(newTitle)}
            placeholder="Email"
            value={email}
            />
          <TextInput 
            style={[styles.input]} 
            placeholder="Password"
            onChangeText={newSubTitle => setPassword(newSubTitle)}
            value={password}
            secureTextEntry={true}
            />
          <ButtonHandle title="Login" onClick={handdleLogin} style={styles.styleButton}/>
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