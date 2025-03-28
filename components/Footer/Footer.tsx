import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../features/fillter";
import { AppDispatch, RootState } from "../../store";

export const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const valueFilter = useSelector((state: RootState) => state.filter);
  const handleshowAll = () => {
    dispatch(changeStatus("ALL"));
  }
  const handleshowCompiled = () => {
    dispatch(changeStatus("Compiled"));
  }
  return (
    <>
      <View 
        style={styles.footerStyle}
      >
        <View>
          <TouchableWithoutFeedback onPress={handleshowAll}>
            <Text 
              style={[styles.textStyle, {color: valueFilter.value == "ALL" ? "#F194FF" : "#9395D3"}]}
            > All 
            </Text>
          </TouchableWithoutFeedback> 
        </View>
        <View>
          <TouchableWithoutFeedback onPress={handleshowCompiled}>
            <Text style={[styles.textStyle, {color: valueFilter.value == "Compiled" ? "#F194FF" : "#9395D3"}]}
            >Compiled
            </Text>
          </TouchableWithoutFeedback> 
        </View>
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
    // color: '#9395D3',
    fontWeight: '400',
    fontSize: 24
  }
}
)