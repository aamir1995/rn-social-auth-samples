import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default Button = (props) => {
    return (<TouchableOpacity><Text>{props.btnText}</Text></TouchableOpacity>)
}