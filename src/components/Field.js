// @flow
import * as _ from "lodash";
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {observable, action} from "mobx";
import { observer } from "mobx-react/native";

import variables from "../../native-base-theme/variables/commonColor";

interface FieldProps {
    label: string,
    defaultValue?: string,
    children?: React$Element<*>,
    last?: boolean
}

@observer
export default class Field extends Component {

    props: FieldProps;
    @observable value: string;

    componentWillMount() {
        this.setValue(this.props.defaultValue || "");
    }

    @autobind @action
    setValue(value: string) {
        this.value = value;
    }

    render(): React$Element<*> {
        const {label, last} = this.props;
        const {value} = this;
        const keysToFilter = ["right", "defaultValue", "inverse", "label", "last"];
        const props = _.pickBy(this.props, (value, key) => keysToFilter.indexOf(key) === -1);
        return <View style={[style.row, last ? { borderBottomWidth: 0 }: {}]}>
            <TouchableOpacity
                onPress={() => this.refs["comment"] && this.refs["comment"].focus()}
                style={style.labelContainer}
            >
                <Text style={style.label}>{label.toUpperCase()}</Text>
            </TouchableOpacity>
            {
                React.Children.count(this.props.children) > 0
                ?
                    this.props.children
                :
                    <TextInput
                        ref="comment"
                        onChangeText={this.setValue} {...{ value }} {...props}
                        style={style.input}
                        placeholderTextColor={variables.gray}
                        underlineColorAndroid="transparent"
                    />
            }
        </View>;
    }
}

const style = StyleSheet.create({
    row: {
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor,
        flexDirection: "row",
        alignItems: "center",
        height: 75
    },
    labelContainer: {
        backgroundColor: "transparent"
    },
    label: {
        marginHorizontal: variables.contentPadding * 2,
        color: variables.gray
    },
    input: {
        flex: 1,
        color: "white"
    }
});