// @flow
import autobind from "autobind-decorator";
import React from "react";
import {View, Image, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import {H1, Button, Text} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import Mark from "./Mark";

import {Small, Styles, Images, Field, NavigationHelpers, WindowDimensions} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Login extends React.Component {

    props: {
        navigation: NavigationScreenProp<*, *>
    }

    @autobind
    signIn() {
        NavigationHelpers.reset(this.props.navigation, "Walkthrough");
        fetch("http://10.0.80.102:3000/test", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                member_first_name: "",
            })
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        });
    }

    @autobind
    signUp() {
        this.props.navigation.navigate("SignUp");
    }

    render(): React$Element<*> {
        return <Image source={Images.login} style={style.img}>
            <ScrollView contentContainerStyle={style.content}>
                <KeyboardAvoidingView behavior="position">
                    <View style={style.logo}>
                        <Mark />
                        <H1 style={StyleSheet.flatten(style.title)}>惠康糖御</H1>
                    </View>
                    <View style={Styles.form}>
                        <Field label="手机号"
                               autoCapitalize="none"
                               returnKeyType="next"
                        />
                        <Field label="密码"
                               secureTextEntry
                               autoCapitalize="none"
                               returnKeyType="go"
                               onSubmitEditing={this.signIn}
                               last
                        />
                    </View>
                    <View>
                        <Button primary block onPress={this.signIn}>
                            <Text>登录</Text>
                        </Button>
                        <Button transparent block onPress={this.signUp}>
                            <Small style={{ color: "white" }}>用户注册</Small>
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </Image>;
    }
}

const style = StyleSheet.create({
    img: {
        resizeMode: "cover",
        ...WindowDimensions
    },
    content: {
        flex: 1,
        justifyContent: "flex-end"
    },
    logo: {
        margin: variables.contentPadding * 8
    },
    title: {
        marginTop: variables.contentPadding * 2,
        color: "white",
        textAlign: "center"
    },
    blur: {
        backgroundColor: "rgba(255, 255, 255, .2)"
    }
});
