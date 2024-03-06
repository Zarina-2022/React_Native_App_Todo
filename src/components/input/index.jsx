import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import inputStyles from './style';
import {COLORS} from '../../../utils/constants';

const Input = ({
  placeholder = 'Type something...',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName="pluscircle",
  onIconPress=()=>{},
  value="",
  onChangeText=()=>{},
}) => {
  return (
    <View style={inputStyles.wrapper}>
      <TextInput
        style={inputStyles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} size={30} color={COLORS.bgHeader} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
