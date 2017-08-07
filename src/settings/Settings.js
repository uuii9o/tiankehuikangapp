// @flow
import React, {Component} from "react";
import {View, Dimensions, Image, StyleSheet} from "react-native";
import {Text, Icon} from "native-base";

import {BaseContainer, Styles, Images, Field, SingleChoice} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Settings extends Component {

    render(): React$Element<*> {
        return <BaseContainer title="Settings" navigation={this.props.navigation} scrollable>
            <Image source={Images.profile} style={style.img}>
                <View style={style.add}>
                    <Icon name="ios-camera-outline" style={{ color: variables.brandSecondary }} />
                </View>
            </Image>
            <View style={style.section}>
                <Text>GENERAL</Text>
            </View>
            <View style={Styles.form}>
                <Field label="Name" defaultValue="Paul Jensen" />
                <Field label="Email" defaultValue="paul@gmail.com" />
                <Field label="Password" defaultValue="foobar" secureTextEntry />
                <Field label="Gender">
                    <SingleChoice labels={["Male", "Female"]} />
                </Field>
                <Field label="Birthday" defaultValue="May 25, 1983" />
            </View>
        </BaseContainer>;
    }
}

const {width} = Dimensions.get("window");
const style = StyleSheet.create({
    img: {
        width,
        height: width * 500 / 750,
        resizeMode: "cover"
    },
    add: {
        backgroundColor: "white",
        height: 50,
        width: 50,
        borderRadius: 25,
        position: "absolute",
        bottom: variables.contentPadding,
        left: variables.contentPadding,
        alignItems: "center",
        justifyContent: "center"
    },
    section: {
        padding: variables.contentPadding * 2,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    }
});