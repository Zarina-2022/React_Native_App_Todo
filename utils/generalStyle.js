import { StyleSheet } from "react-native";
import { COLORS } from "./constants";


export const app = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:COLORS.textHeader
    }
})

export const todo = StyleSheet.create({
    todosWrapper:{
        flex:1,
        marginHorizontal:20,
        marginVertical:30,
    },
    emptyTodo:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color:COLORS.textPrimary
    },
    scrollView:{
        flexGrow:1,
    }
})