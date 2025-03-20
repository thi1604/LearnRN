import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

type TStyleFlexDirection = | 'row'
| 'column'
| 'row-reverse'
| 'column-reverse'
| undefined;

export const Example = () => {
  const data: TStyleFlexDirection[] = ["column", "row", "row-reverse", "column-reverse"];
  const [flexDirection, setflexDirection] = useState<TStyleFlexDirection>("column");
  return (
    <>
      <View style={{}}>
        <Text style={style.headerTitle}>flexDirection</Text>
        <View style={style.box}>
          {data.map(item => (
            <TouchableOpacity 
              style={style.itemBox}
              onPress = {() => setflexDirection(item)}
            >
              <Text style={style.textItemBox}>{item}</Text>
            </TouchableOpacity>
          ))
        }
        </View>
        <View style={[{marginTop: 20}, {flexDirection: flexDirection}]}>
          <View style={[style.box2, {backgroundColor: 'powderblue'}]} />
          <View style={[style.box2, {backgroundColor: 'skyblue'}]} />
          <View style={[style.box2, {backgroundColor: 'steelblue'}]} />
        </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginVertical: 10
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20
  },
  itemBox: {
    width: '40%',
    height: 40,
    color: 'coral',
    backgroundColor: 'oldlace',
    padding: 10,
    borderRadius: 40
  },
  textItemBox: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: 'center',
    color: 'coral',
  },
  itemBoxSelected: {
    color: 'white',
    backgroundColor: 'coral'
  },
  box2: {
    width: 40,
    height: 40
  }
});