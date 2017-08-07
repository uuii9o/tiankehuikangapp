// @flow
import React, {Component} from "react";
import {StyleSheet, Image, Dimensions} from "react-native";
import {H1} from "native-base";

import {BaseContainer, Images, Small} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Groups extends Component {
    render(): React$Element<*> {
        return <BaseContainer title="Groups" navigation={this.props.navigation} scrollable>
            <Group title="Music" description="15 ITEMS" picture={Images.music} />
            <Group title="Architecture" description="18 ITEMS" picture={Images.architecture} />
            <Group title="Travel" description="8 ITEMS" picture={Images.travel} />
        </BaseContainer>;
    }
}

class Group extends Component {
    props: {
        title: string,
        description: string,
        picture: number
    }

    render(): React$Element<*> {
        const {title, description, picture} = this.props;
        return <Image source={picture} style={style.img}>
            <H1>{title}</H1>
            <Small style={style.text}>{description.toUpperCase()}</Small>
        </Image>;
    }
}

const {width} = Dimensions.get("window");
const style = StyleSheet.create({
    img: {
        width: width,
        height: width * 402 / 750,
        resizeMode: "cover",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        borderColor: "white",
        borderWidth: variables.borderWidth,
        padding: variables.contentPadding,
        margin: variables.contentPadding
    }
});