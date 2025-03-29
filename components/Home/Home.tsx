import axios from "axios"
import { useEffect } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { reInit } from "../../features/listItem"
import { AppDispatch, RootState } from "../../store"
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
});

export const Home =  () => {
  let dataToDo : {_id: string, title: string, avatar: string, description: string, deleted: boolean, isDone: boolean}[]= [];
  // const [listData, setListData] = useState<{title: string, avatar: string, description: string}[]>([])
  const dispatch = useDispatch<AppDispatch>();
  const dataFinal = useSelector((state: RootState) => state.itemArray);
  const isLogin = useSelector((state: RootState) => state.checkLogin);
  const filter = useSelector((state: RootState) => state.filter);
  useEffect(() => {
    const getData = async () => {
      await axiosInstance.get("")
      .then(function(response) {
        dataToDo = response.data.listTopicsOS; // Now, response.data is response.data.listTopicsOS because we use interceptors.response
        const dataFinal = dataToDo.map(item => {return {...item, isDone: false}})
        dispatch(reInit({dataAfterCallAPI: dataFinal}));
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
        {isLogin.value == true && 
          <View style={[styles.container]}>
            <View style={{position: 'absolute', zIndex: 99, bottom: 162, right: 30}}>
              <ButtonCreate/>
            </View>
            <ScrollView contentContainerStyle={[{ backgroundColor: '#D6D7EF', paddingBottom: 100}]}>
              <View style={styles.body}>
                {dataFinal.map((item, index) => { 
                  if(item.deleted == false ){
                    if(filter.value == "Compiled" && item.isDone == true)
                      return <ItemTodo data={item} key={index}/>
                    else if (filter.value == "ALL")
                      return <ItemTodo data={item} key={index}/>
                  }
                  }
                )}
              </View>
            </ScrollView>
            <Footer/> 
          </View>
      }
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