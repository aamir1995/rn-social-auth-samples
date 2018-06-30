import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * COMPONENTS
 */
// import { width } from '@components';

export default Button = (props) => {
    return (
        <View style={[{ marginHorizontal: 15, marginVertical: 5 }, props.styles]}>
            <Icon.Button style={styles.btn} name={props.icon} backgroundColor={props.background} onPress={props.onBtnPress}>
                <Text style={styles.btnText}>{props.btnText}</Text>
            </Icon.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {},
    btnText: {
        fontSize: 15,
        color: '#fff'
    }
})
