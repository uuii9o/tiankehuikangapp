// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, Image, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import {Button, Header, Left, Right, Body, Icon, Title, Text} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import {Images, Field, NavigationHelpers, Styles, SingleChoice, WindowDimensions} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class SignUp extends Component {

    props: {
        navigation: NavigationScreenProp<*, *>
    }

    @autobind
    back() {
        this.props.navigation.goBack();
    }

    @autobind
    signIn() {
        NavigationHelpers.reset(this.props.navigation, "Walkthrough");
    }

    render(): React$Element<*> {
        return <Image source={Images.signUp} style={style.img}>
            <ScrollView style={Styles.flexGrow}>
                <KeyboardAvoidingView behavior="position">
                    <Header noShadow>
                        <Left>
                            <Button onPress={this.back} transparent>
                                <Icon name='close' />
                            </Button>
                        </Left>
                        <Body>
                        <Title>Sign Up</Title>
                        </Body>
                        <Right />
                    </Header>
                    <View style={style.row}>
                        <Button transparent block style={StyleSheet.flatten(style.btn)}>
                            <Icon name="logo-twitter" />
                            <Text style={{ textAlign: "center" }}>Connect with</Text>
                            <Text style={{ textAlign: "center" }}>Twitter</Text>
                        </Button>
                        <Button transparent block style={StyleSheet.flatten([style.btn, style.facebook])}>
                            <Icon name="logo-facebook" />
                            <Text style={{ textAlign: "center" }}>Connect with</Text>
                            <Text style={{ textAlign: "center" }}>Facebook</Text>
                        </Button>
                    </View>
                    <Button transparent block style={StyleSheet.flatten([style.btn, style.email])}>
                        <Icon name="ios-mail-outline" style={{ color: "white", marginRight: 5 }} />
                        <Text>or use your email address</Text>
                    </Button>
                    <View style={Styles.form}>
                        <Field label="Name" />
                        <Field label="Username" />
                        <Field label="Password" secureTextEntry />
                        <Field label="Gender">
                            <SingleChoice labels={["Male", "Female"]} />
                        </Field>
                        <Field label="Birthday" last />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <Button primary block onPress={this.signIn} style={{ height: variables.footerHeight }}>
                <Text>CONTINUE</Text>
            </Button>
        </Image>;
    }
}

const style = StyleSheet.create({
    img: {
        ...WindowDimensions
    },
    row: {
        flexDirection: "row"
    },
    btn: {
        flex: 1,
        margin: 0,
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        height: 125,
        flexDirection: "column"
    },
    facebook: {
        borderLeftWidth: variables.borderWidth,
        borderColor: "white"
    },
    email: {
        borderTopWidth: variables.borderWidth,
        borderBottomWidth: variables.borderWidth,
        borderColor: "white",
        flexDirection: "row",
        height: 87
    }
});