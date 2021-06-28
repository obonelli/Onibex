import React from 'react'
import { View } from 'react-native';
import Styles from './styles';

const Wrapper = (props) => {
    return (
        <View style={Styles.container}>
            {props.children}
        </View>
    )
}

export default Wrapper;