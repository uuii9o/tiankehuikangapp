// @flow
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Icon} from "native-base";

export default class Mark extends Component {

    render(): React$Element<*> {
        return <View style={style.container}>
            <Icon name="md-checkmark" style={{ fontSize: 100, color: "white", backgroundColor: "transparent" }} />
        </View>;
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
});