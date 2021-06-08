import React, { useState, FC } from "react";
// import "./styles.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
    name: string;
    onChanges: Function;
    value: string;
}

export const MyComponent: FC = () => {
    const [date, setDate] = useState(new Date());
    const handleChange = (date: Date) => setDate(date);

    return <DatePicker onChange={handleChange} selected={date} />;
};
