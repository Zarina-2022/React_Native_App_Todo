import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/constants";


const styles = StyleSheet.create({
    headerWrapper:{
        width:"100%",
        height:50,
        backgroundColor:COLORS.bgHeader,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:COLORS.textHeader,
        fontWeight:"bold",
        fontSize:20,
    }
})

export default styles