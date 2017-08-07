// @flow
import moment, {Moment} from "moment";
import _ from "lodash";
import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import {Button} from "native-base";

import {Styles} from "../components";

import variables from "../../native-base-theme/variables/commonColor";

export interface Date {
    month: number,
    day: number
}

interface CalendarEntry extends Date {
    outside: boolean
}

type Calendar = CalendarEntry[][];

interface MonthProps {
    month: number,
    date: Date,
    onPress?: (Date) => void
}

export default class Month extends Component {

    props: MonthProps;

    render(): React$Element<View> {
        const {month, date, onPress} = this.props;
        return <View style={style.month}>
            <Header />
            {
                _.chunk(calendar[month], 7).map((entries, index) =>
                    <Week style={style.border} key={index} {...{entries, month, date, onPress}} />
                )
            }
        </View>;
    }
}

class Week extends Component {

    props: {
        entries: CalendarEntry[],
        month: number,
        date: Date,
        onPress?: (Date) => void
    }

    render(): React$Element<*> {
        const {entries, date, onPress} = this.props;
        return <Row>
        {
            entries.map((entry, key) =>
                <Cell
                    key={key}
                    date={{ month: entry.month, day: entry.day }}
                    active={!entry.outside}
                    selected={entry.day === date.day && entry.month === date.month}
                    onPress={onPress}
                />
            )
        }
        </Row>;
    }
}

class Header extends Component {
    render(): React$Element<*> {
        return <Row>
        {
            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                .map((day, key) => <View key={key} style={[Styles.flexGrow, Styles.center]}>
                    <Text style={style.inactiveText}>{day}</Text>
                </View>)
        }
        </Row>;
    }
}

class Row extends Component {
    prop: {
        style: StyleSheet.Styles | Array<StyleSheet.Styles>
    }

    render(): React$Element<View> {
        return <View style={[{ flexDirection: "row" }, this.props.style]}>{this.props.children}</View>
    }
}

class Cell extends Component {

    props: {
        date: Date,
        active?: boolean,
        selected?: boolean,
        onPress?: (Date) => void
    }

    render(): React$Element<*> {
        const {date, active, selected, onPress} = this.props;
        const cellStyle = [
            Styles.flexGrow,
            Styles.center,
            {
                borderColor: selected ? "white" : "transparent",
                borderRadius: 0,
                borderWidth: variables.borderWidth
            }
        ];
        return <Button
            style={StyleSheet.flatten(cellStyle)}
            onPress={() => onPress ? onPress(date) : undefined}
            transparent>
            <Text style={active ? style.activeText : style.inactiveText}>{`${date.day}`}</Text>
        </Button>;
    }
}

const style = StyleSheet.create({
    month: {
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    },
    activeText: {
        color: "white"
    },
    inactiveText: {
        color: variables.listBorderColor
    },
    bordered: {
        borderTopWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    },
    border: {
        borderTopWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
    }
});

const calendar: Calendar = [[], [], [], [], [], [], [], [], [], [], [], []];
const addCalendarEntry = (month: number, outside: boolean, date: Moment) => {
    calendar[month].push({
        outside,
        day: date.date(),
        month: date.month()
    });
};

calendar.forEach((entries, month) => {
    const firstOf = () => moment({ year: 2017, month: month });
    const daysInMonth = firstOf().daysInMonth();
    const dayOnFirst = firstOf().isoWeekday();
    const dayOnLast = firstOf().date(daysInMonth).isoWeekday();
    // Start
    for(let i = 1; i < dayOnFirst; i++) {
        const date = firstOf().date(i - dayOnFirst + 1);
        addCalendarEntry(month, true, date);
    }
    // Middle
    for(let i = 1; i <= daysInMonth; i++) {
        const date  = firstOf().date(i);
        addCalendarEntry(month, false, date);
    }
    // End
    for(let i = 1; i <= 7 - dayOnLast; i++) {
        const date = firstOf().date(daysInMonth + i);
        addCalendarEntry(month, true, date);
    }
});

