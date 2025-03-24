import axios from "axios"
import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { ButtonCreate } from "../Buttons/ButtonCreate"
import { Footer } from "../Footer/Footer"
import { ItemTodo } from "../ItemTodo/ItemTodo"

const axiosInstance = axios.create({
  baseURL: "http://10.0.2.2:3000",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Origin": "http://localhost:3001"
  },
})

//Handle data before response
axiosInstance.interceptors.response.use(response => {
  response.data = response.data.listTopicsOS;
  return response;
})

export const Home =  () => {
  let dataToDo : {title: string, avatar: string, description: string}[]= [];
  const [listData, setListData] = useState<{title: string, avatar: string, description: string}[]>([])
  useEffect(() => {
    const getData = async () => {
      await axiosInstance.get("")
      .then(function(response) {
        dataToDo = response.data; // Now, response.data is response.data.listTopicsOS because we use interceptors.response
        setListData(dataToDo)
      })
      .catch(function(error) {
        if(error.request)
        console.log(error.request);
      })
      .finally(function () {
        console.log("Added new task successfully!");
      })
    }
    getData();
  }, [])
  return (
    <>
      {/* <Header/> */}
        <View style={[styles.container]}>
          <View style={{position: 'absolute', zIndex: 99, bottom: 162, right: 30}}>
            <ButtonCreate/>
          </View>
          <ScrollView contentContainerStyle={[{ backgroundColor: '#D6D7EF', paddingBottom: 100}]}>
            <View style={styles.body}>
              {listData.map((item, index) => (
                <ItemTodo data={item} key={index}/>
              ))}
            </View>
          </ScrollView>
          <Footer/> 
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1
  },
  body: {
    marginTop: 14,
    marginHorizontal: 7
  }
})