// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, Image, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import {Button, Header, Left, Right, Body, Icon, Title, Text} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import {Images, Field, NavigationHelpers, Styles, SingleChoice, WindowDimensions} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            cell_phone: "", password: "", password_confirm: "", email: "", first_name: "",
            last_name: "", dob: "", gender: ""
        };
        console.disableYellowBox = true;
    }

    props: {
        navigation: NavigationScreenProp<*, *>
    }

    @autobind
    back() {
        this.props.navigation.goBack();
    }

    @autobind
    signIn() {
        if (this.state.password != this.state.password_confirm) {
            alert("The password not match. Please reenter password.");
            return;
        }
        NavigationHelpers.reset(this.props.navigation, "Walkthrough");
        fetch("http://10.0.80.67:3000/api/users/sign_up", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    cell_phone: this.state.cell_phone,
                    password: this.state.password,
                    email: this.state.email,
                },
                patient: {
                    fname: this.state.first_name,
                    lname: this.state.last_name,
                    dob: this.state.dob,
                    gender: this.state.gender
                }
            })
        }).then(function(response) {
            return response.json();
        }).then(json =>  {
            if (parseInt(json.status) == 2000){
                NavigationHelpers.reset(this.props.navigation, "Walkthrough");
            }
            else {
                alert("手机号或密码错误.");
            }
            return json;
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        });
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
                        <Title>病人注册</Title>
                        </Body>
                        <Right />
                    </Header>
                    <View style={style.row}>
                        <Button transparent block style={StyleSheet.flatten(style.btn)}>
                            <Icon name="logo-twitter" />
                            <Text style={{ textAlign: "center" }}>微新登录</Text>
                            {/*<Text style={{ textAlign: "center" }}>Twitter</Text>*/}
                        </Button>
                        <Button transparent block style={StyleSheet.flatten([style.btn, style.facebook])}>
                            <Icon name="logo-facebook" />
                            {/*<Text style={{ textAlign: "center" }}>Connect with</Text>*/}
                            <Text style={{ textAlign: "center" }}>微博登录</Text>
                        </Button>
                    </View>
                    <Button transparent block style={StyleSheet.flatten([style.btn, style.email])}>
                        <Icon name="ios-mail-outline" style={{ color: "white", marginRight: 5 }} />
                        <Text>手机登录</Text>
                    </Button>
                    <View style={Styles.form}>
                        <Field label="邮箱(可选)" onChangeText={(value) => this.setState({email: value})} />
                        <Field label="密码" onChangeText={(value) => this.setState({password: value})} isPasswordField="true" />
                        <Field label="确认密码" onChangeText={(value) => this.setState({password_confirm: value})} isPasswordField="true" />
                        <Field label="姓" onChangeText={(value) => this.setState({first_name: value})} />
                        <Field label="名" onChangeText={(value) => this.setState({last_name: value})} />
                        <Field label="手机(必填)" onChangeText={(value) => this.setState({cell_phone: value})} />
                        <Field label="Gender">
                            <SingleChoice labels={["Male", "Female"]} />
                        </Field>
                        <Field label="生日" last onChangeText={(value) => this.setState({dob: value})} />
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