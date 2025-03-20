import { ScrollView, StyleSheet, View } from "react-native"
import { ButtonCreate } from "../Buttons/ButtonCreate"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/header"
import { ItemTodo } from "../ItemTodo/ItemTodo"



export const Home = () => {
  const dataToDo = [{
    title: "TODO TITLE1",
    subTitle: "Todo subTitle1"
  },
  {
    title: "TODO TITLE2",
    subTitle: "Todo subTitle2"
  },
  {
    title: "TODO TITLE3",
    subTitle: "Todo subTitle3"
  },
  {
    title: "TODO TITLE4",
    subTitle: "Todo subTitle4"
  },
  {
    title: "TODO TITLE5",
    subTitle: "Todo subTitle5"
  },
  {
    title: "TODO TITLE5",
    subTitle: "Todo subTitle5"
  },
  {
    title: "TODO TITLE5",
    subTitle: "Todo subTitle5"
  },
  {
    title: "TODO TITLE5",
    subTitle: "Todo subTitle5"
  }
  ]
  return (
    <>
      {/* <Header/> */}
        <View style={[styles.container]}>
          <View style={{position: 'absolute', zIndex: 99, bottom: 162, right: 30}}>
            <ButtonCreate/>
          </View>
          <ScrollView contentContainerStyle={[{ backgroundColor: '#D6D7EF', paddingBottom: 100}]}> 
            <View style={styles.body}>
              {dataToDo.map((item, index) => (
                <ItemTodo data={item} key={index} />
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