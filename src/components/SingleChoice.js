// @flow
import React, {Component} from "react";
import {observable, runInAction} from "mobx";
import {observer} from "mobx-react/native";
import {View} from "react-native";
import {Button, Text, CheckBox as RNCheckBox} from "native-base";

import Styles from "./Styles";

@observer
export default class SingleChoice extends Component {

    @observable index: number

    props: {
        labels: string[]
    }

    render(): React$Element<*> {
        const {labels} = this.props;
        return <View style={Styles.row}>
            {
                labels.map((label, index) => (<CheckBox
                    key={index}
                    label={label}
                    checked={index === this.index}
                    onPress={() => runInAction(() => this.index = index)}
                />))
            }
        </View>;
    }
}

class CheckBox extends Component {

    props: {
        label: string,
        checked: boolean,
        onPress: () => void
    }

    render(): React$Element<*>  {
        const {label, checked, onPress} = this.props;
        return <Button {...{ onPress }} disabled={checked} transparent>
            <RNCheckBox {...{ checked, onPress }} style={{ margin: 15 }} />
            <Text style={{ color: checked ? "white" : "rgba(255, 255, 255, .5)"}}>{label}</Text>
        </Button>;
    }
}