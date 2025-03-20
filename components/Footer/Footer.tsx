import { StyleSheet, Text, View } from "react-native"

export const Footer = () => {
  return (
    <>
      <View 
        style={styles.footerStyle}
      >
        <Text style={styles.textStyle}>All</Text>
        <Text style={styles.textStyle}>Compiled</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  footerStyle: {
    // flex: 0.1, //Chiem 1/10 phan con lai cua thang cha co flex:1
    height: 68,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 81,
    borderTopWidth: 2, 
    borderTopColor: '#D6D7EF',
    backgroundColor: "#FFFFFF"
  },
  textStyle: {
    color: '#9395D3',
    fontWeight: '400',
    fontSize: 24
  }
}
)