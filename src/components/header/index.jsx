import {Text, View} from 'react-native';
import React from 'react';
import styles from './style';

const Header = ({title = ''}) => {
  return (
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
  );
};

export default Header;
