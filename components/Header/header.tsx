import { StyleSheet, Text, View } from "react-native"

export const Header = () => {
  return (
    <>
      <View style= {[styles.header]}>
        <View 
          style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            marginTop: 60, 
            marginBottom: 23
          }}
        >
        <View>
            <Text style={{color: "#FFFFFF", fontSize: 24, fontWeight: "500"}}>TODO APP</Text>
          </View>
          <View>
            <Text style={{color: "#FFFFFF", fontSize: 20, fontWeight: "400"}}>Lich</Text>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#9395D3",
    height: 118,
    paddingHorizontal: 19
  }
})