// @flow
import autobind from "autobind-decorator";
import React from "react";
import {View, Image, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import {H1, Button, Text, Input, Item, Icon} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import Mark from "./Mark";

import {Small, Styles, Images, Field, NavigationHelpers, WindowDimensions} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {cell_phone: "", password: ""};
        console.disableYellowBox = true;
    }

    props: {
        navigation: NavigationScreenProp<*, *>
    };

    @autobind
    signIn() {
        fetch("http://10.0.80.67:3000/api/users/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cell_phone: this.state.cell_phone,
                password: this.state.password
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
                               onChangeText={(value) => this.setState({cell_phone: value})}
                        />
                        <Field label="密码"
                               //secureTextEntry
                               isPasswordField="true"
                               autoCapitalize="none"
                               returnKeyType="go"
                               onSubmitEditing={this.signIn}
                               last
                               onChangeText={(value) => this.setState({password: value})}
                        />
                        {/*<Item underline style={style.textBox}>*/}
                            {/*<Icon name="navigate" />*/}
                            {/*<Input placeholder="手机号" returnKeyType="done"*/}
                                   {/*onChangeText={(value) => this.setState({cell_phone: value})}*/}
                            {/*/>*/}
                        {/*</Item>*/}
                        {/*<Item underline style={style.textBox}>*/}
                            {/*<Icon name="navigate" />*/}
                            {/*<Input placeholder="密码" returnKeyType="done"*/}
                                   {/*secureTextEntry*/}
                                   {/*onChangeText={(value) => this.setState({password: value})}*/}
                            {/*/>*/}
                        {/*</Item>*/}
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
    },
    textBox: {
        marginTop: 10,
        width: 300
    }
});
