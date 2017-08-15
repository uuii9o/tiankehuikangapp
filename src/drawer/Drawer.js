// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, StyleSheet, Image, TouchableHighlight} from "react-native";
import {Button, Container, Icon, Header, Text, Left, Title, Body, Right} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import {Images, NavigationHelpers, Styles, WindowDimensions} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Drawer extends Component {

    go(key: string) {
        this.props.navigation.navigate(key);
    }

    @autobind
    login() {
        NavigationHelpers.reset(this.props.navigation, "Login");
    }

    render(): React$Element<*> {
        const {navigation} = this.props;
        return <Image source={Images.signUp} style={style.img}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.go("DrawerClose")}>
                            <Icon name="ios-close-outline" style={StyleSheet.flatten(style.closeIcon)} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>NAVIGATE</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={style.itemContainer}>
                    <View style={style.row}>
                        <DrawerItem {...{navigation}} name="Home" icon="ios-home-outline" left />
                        <DrawerItem {...{navigation}} name="Calendar" icon="ios-calendar-outline" />
                    </View>
                    <View style={style.row}>
                        <DrawerItem {...{navigation}} name="Groups" icon="ios-apps-outline" left />
                        <DrawerItem {...{navigation}} name="Overview" icon="ios-analytics-outline" />
                    </View>
                    <View style={style.row}>
                        <DrawerItem {...{navigation}} name="Lists" icon="ios-list-outline" left />
                        <DrawerItem {...{navigation}} name="Profile" icon="ios-contact-outline" />
                    </View>
                    <View style={style.row}>
                        <DrawerItem {...{navigation}} name="Timeline" icon="ios-time-outline" left />
                        <DrawerItem {...{navigation}} name="Settings" icon="ios-options-outline" />
                    </View>
                </View>
                <Button transparent block onPress={this.login}>
                    <Text>LOGOUT</Text>
                </Button>
            </Container>
        </Image>;
    }
}

class DrawerItem extends Component {

    props: {
        name: string,
        navigation: NavigationScreenProp<*, *>,
        icon: string,
        left?: boolean
    }

    render(): React$Element<*> {
        const {name, navigation, icon, left} = this.props;
        const navState = this.props.navigation.state;
        const active = navState.routes[navState.index].key === name;
        const props = {
            onPress: () => navigation.navigate(name),
            style: [style.item, left ? { borderRightWidth: variables.borderWidth } : undefined]
        };
        return <TouchableHighlight {...props} activeOpacity={.5} underlayColor="rgba(255, 255, 255, .2)">
            <View style={[Styles.center, Styles.flexGrow]}>
                <Icon name={icon} style={{ color: variables.listBorderColor }} />
                <Text style={{ marginTop: variables.contentPadding }}>{name}</Text>
                {
                    active && <View style={style.dot} />
                }
            </View>
        </TouchableHighlight>;

    }
}

const style = StyleSheet.create({
    img: {
        resizeMode: "cover",
        ...WindowDimensions
    },
    mask: {
        color: variables.listBorderColor
    },
    closeIcon: {
        fontSize: 50,
        color: variables.listBorderColor
    },
    itemContainer: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: "row",
        borderColor: variables.listBorderColor,
        borderBottomWidth: variables.borderWidth
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        borderColor: variables.listBorderColor
    },
    dot: {
        backgroundColor: "white",
        height: 10,
        width: 10,
        borderRadius: 5,
        position: "absolute",
        right: variables.contentPadding,
        top: variables.contentPadding,
        alignSelf: "flex-end"
    }
});
