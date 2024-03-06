import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/constants';

const todoStyles = StyleSheet.create({
todoWrapper:{
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:COLORS.textGray,
    flexDirection:"row",
    alignItems:"center"
},
title:{
    fontWeight:'bold',
    fontSize:25,
    color:COLORS.textPrimary,
},
completedTask:{
    color:COLORS.taskColor,
    textDecorationLine:"line-through"
},
date:{
    marginTop:10,
    color:COLORS.textPrimary,
},
textWrapper:{
flex:1,
},
iconWrapper:{
    flexDirection:"row",
    gap:10,
}
  });

export default todoStyles;
