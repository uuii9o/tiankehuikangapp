// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, StyleSheet, Image} from "react-native";
import {Button, Footer, FooterTab, Text, Icon} from "native-base";
import type { NavigationScreenProp } from "react-navigation/src/TypeDefinition";
import Swiper from "react-native-swiper";

import {Styles, NavigationHelpers, Images, WindowDimensions} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Walkthrough extends Component {

    props: {
        navigation: NavigationScreenProp<*, *>
    }

    swiper: Swiper

    @autobind
    home() {
        NavigationHelpers.reset(this.props.navigation, "Main");
    }

    render(): React$Element<*> {
        return <Image source={Images.walkthrough} style={style.img}>
            <Swiper
                ref={swiper => this.swiper = swiper}
                height={swiperHeight}
                dot={<Icon name="ios-radio-button-off-outline" style={{ fontSize: 12, margin: 4 }} />}
                activeDot={<Icon name="ios-radio-button-on" style={{ fontSize: 12, margin: 4 }} />}
            >
                <View style={[Styles.center, Styles.flexGrow]}>
                    <Phone />
                    <Text>Share with coworkers, friends, and family</Text>
                </View>
                <View style={[Styles.center, Styles.flexGrow]}>
                    <Phone />
                    <Text>Manage your tasks efficiently and quickly</Text>
                </View>
                <View style={[Styles.center, Styles.flexGrow]}>
                    <Phone />
                    <Text>Group by topics that matter to you</Text>
                </View>
            </Swiper>
            <Footer style={{ borderTopWidth: variables.borderWidth }}>
                <FooterTab>
                    <Button onPress={this.home} transparent>
                        <Text>SKIP</Text>
                    </Button>
                    <Button transparent onPress={() => this.swiper.scrollBy(1)} style={StyleSheet.flatten(style.next)}>
                        <Text>NEXT</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Image>;
    }
}

class Phone extends Component {
    render(): React$Element<*> {
        return <View style={style.phone}>
            <View style={style.phoneContainer}>
                <Icon name="ios-checkmark-circle-outline" style={{ fontSize: 45 }} />
            </View>
            <View style={style.phoneFooter}>
                <Icon name="ios-radio-button-off" style={{ fontSize: 15 }} />
            </View>
        </View>;
    }
}

const {height} = WindowDimensions;
const borderWidth = variables.borderWidth * 2;
const swiperHeight = height - variables.footerHeight;
const style = StyleSheet.create({
    img: {
        ...WindowDimensions
    },
    next: {
        borderRadius: 0,
        borderLeftWidth: variables.borderWidth,
        borderColor: "white"
    },
    phone: {
        borderColor: "white",
        borderWidth: borderWidth,
        borderRadius: 4,
        height: 175,
        width: 100,
        marginBottom: variables.contentPadding
    },
    phoneContainer: {
        flex: .8,
        justifyContent: "center",
        alignItems: "center"
    },
    phoneFooter: {
        flex: .2,
        borderColor: "white",
        borderTopWidth: borderWidth,
        justifyContent: "center",
        alignItems: "center"
    }
})

