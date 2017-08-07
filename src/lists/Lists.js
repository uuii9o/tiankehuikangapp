// @flow
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import {Button, Icon} from "native-base";
import {observable, action} from "mobx";
import { observer } from "mobx-react/native";

import {BaseContainer, Styles} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export default class Lists extends Component {
    render(): React$Element<*> {
        return <BaseContainer title="Lists" navigation={this.props.navigation} scrollable>
            <Item title="Design new icon" done />
            <Item title="Work on UI Kit" />
            <Item title='React article: "Designing for Mobile"' />
            <Item title="Revise wireframes" done />
            <Item title="Catch up with Mary" />
            <Item title="Design explorations for new project" />
        </BaseContainer>;
    }
}

@observer
class Item extends Component {

    props: {
        title: string,
        done?: boolean
    }

    @observable done: boolean;

    componentWillMount() {
        const {done} = this.props;
        this.done = !!done;
    }

    @autobind @action
    toggle() {
        this.done = !this.done;
    }

    render(): React$Element<*>  {
        const {title} = this.props;
        const txtStyle = this.done ? Styles.whiteText : Styles.grayText;
        return <View style={[Styles.listItem, { marginHorizontal: 0 }]}>
            <Button transparent
                    onPress={this.toggle}
                    style={StyleSheet.flatten([Styles.center, style.button])}>
                <Icon name="md-checkmark" style={StyleSheet.flatten(txtStyle)} />
            </Button>
            <View style={[Styles.center, style.title]}>
                <Text style={txtStyle}>{title}</Text>
            </View>
        </View>;
    }
}

const style = StyleSheet.create({
    mask: {
        backgroundColor: "rgba(0, 0, 0, .5)"
    },
    button: {
        height: 75, width: 75, borderRadius: 0
    },
    title: {
        paddingLeft: variables.contentPadding
    }
});