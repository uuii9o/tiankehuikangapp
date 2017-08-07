// @flow
import React, {Component} from "react";
import {StyleSheet, Image, ScrollView, KeyboardAvoidingView} from "react-native";
import {Footer, FooterTab, Button, Header as NBHeader, Left, Body, Title, Right, Icon} from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";

import Avatar from "./avatar/Avatar";
import Images from "./images/Images";
import WindowDimensions from "./WindowDimensions";

// import variables from "../../native-base-theme/variables/commonColor";

export default class BaseContainer extends Component {
    props: {
        title: string | React$Element<*>,
        navigation: NavigationScreenProp<*, *>,
        scrollable?: boolean,
        children?: React$Element<*>
    }

    render(): React$Element<*> {
        const {title, navigation, scrollable} = this.props;
        return <Image source={Images.signUp} style={style.img}>
                <NBHeader noShadow>
                    <Left>
                        <Button onPress={() => navigation.navigate("DrawerOpen")} transparent>
                            <EvilIcons name="navicon" size={32} color="white" />
                        </Button>
                    </Left>
                    <Body>
                    {
                        typeof(title) === "string" ? <Title>{title.toUpperCase()}</Title> : title
                    }
                    </Body>
                    <Right style={{ alignItems: "center" }}>
                        <Avatar size={30} />
                    </Right>
                </NBHeader>
                {
                    scrollable ? (
                        <ScrollView>
                            <KeyboardAvoidingView behavior="position">{this.props.children}</KeyboardAvoidingView>
                        </ScrollView>
                    )
                    :
                        this.props.children
                }
                <Footer>
                    <FooterTab>
                        <Button onPress={() => navigation.navigate("Calendar")} transparent>
                            <Icon name="ios-calendar-outline" style={{ fontSize: 32 }} />
                        </Button>
                        <Button transparent onPress={() => navigation.navigate("Create")}>
                            <Icon name="ios-add-circle" style={{ fontSize: 64 }} />
                        </Button>
                        <Button onPress={() => navigation.navigate("Overview")} transparent>
                            <Icon name="ios-stats-outline" style={{ fontSize: 32 }} />
                        </Button>
                    </FooterTab>
                </Footer>
            </Image>;
    }
}

const style = StyleSheet.create({
    img: {
        ...WindowDimensions
    }
});