import { Button, ButtonProps } from "react-native"
import React from "react";
import { FunctionComponent } from "react";

export const ButtonIcon: FunctionComponent<{ title: string, onClick: () => void }> = ({ title, onClick }) => {
  // const {title, functHandle} = props;
  return (
    <>
      <Button title={title} color="#f194ff" onPress={onClick}></Button>
    </>
  ) //Tuan thu hoc cach viet type cho du lieu
  
// export const ButtonIcon = ( props : any ) => {
//   const {title, onClick} = props;
//   return (
//     <>
//       <Button title={title} color="#f194ff" onPress={onClick}></Button>
//     </>
//   )
}