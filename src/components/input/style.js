import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/constants';

const inputStyles = StyleSheet.create({
    wrapper: {
      marginHorizontal: 20,
      marginVertical: 10,
      flexDirection:'row',
      alignItems:'center',
      gap:10,
    },
    input: {
      borderWidth: 1,
      borderColor: COLORS.bgHeader,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 4,
      color: COLORS.textPrimary,
      fontSize: 16,
      flex:1,
    }
  });

export default inputStyles;
