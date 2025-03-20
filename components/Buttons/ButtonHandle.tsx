import { FunctionComponent } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const ButtonHandle:FunctionComponent<{title: String, onClick: () => void, style: object}> = ({title, onClick, style}) => {
  return (
    <>
      <TouchableOpacity style={[style, styles.buttonAdd]} onPress={onClick}>
        <Text style={styles.text}> {title}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20
  }
});