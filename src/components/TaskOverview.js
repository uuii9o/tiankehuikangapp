// @flow
import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import {H1} from "native-base";

import Styles from "./Styles";

import variables from "../../native-base-theme/variables/commonColor";

export default class TaskOverview extends Component {

    props: {
        completed: number,
        overdue: number
    }

    render(): React$Element<*> {
        const {completed, overdue} = this.props;
        return <View style={style.container}>
            <View style={[style.count, Styles.center, style.leftCell]}>
                <H1 style={StyleSheet.flatten(style.heading)}>{`${completed}`}</H1>
                <Text style={Styles.grayText}>COMPLETED</Text>
            </View>
            <View style={[style.count, Styles.center]}>
                <H1 style={StyleSheet.flatten(style.heading)}>{`${overdue}`}</H1>
                <Text style={Styles.grayText}>OVERDUE</Text>
            </View>
        </View>;
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopWidth: variables.borderWidth,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    },
    leftCell: {
        borderRightWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    },
    count: {
        flex: .5,
        padding: variables.contentPadding * 2
    },
    heading: {
        color: "white"
    }
});