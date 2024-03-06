import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/constants";


const modalStyles = StyleSheet.create({
    modalContainer:{
        flex:1,
        backgroundColor:COLORS.modalBg,
        justifyContent:"center",
        alignItems:"center"
    },
    modalContentWrapper:{
        backgroundColor:COLORS.textHeader,
        width:"80%",
        padding:20,
        borderRadius:4,
    },
    title:{
        color:COLORS.textPrimary,
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center"
    },
    btn:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"center",
        gap:10,
    },
    cancelBtn:{
        borderWidth:1,
        borderColor:COLORS.textPrimary,
        width:100,
        paddingVertical:6,
        alignItems:"center",
        borderRadius:5,
    },
    cancelBtnText:{
        color:COLORS.textPrimary,
    },
    saveBtn:{
        borderWidth:1,
        borderColor:COLORS.textPrimary,
        width:100,
        paddingVertical:6,
        alignItems:"center",
        backgroundColor:COLORS.textPrimary,
        borderRadius:5,
    },
    saveBtnText:{
        color:COLORS.textHeader,
    },
    error:{
        paddingHorizontal:20 ,
        color:COLORS.errorText
 }


});

export default modalStyles