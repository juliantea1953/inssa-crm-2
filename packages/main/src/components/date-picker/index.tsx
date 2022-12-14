import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Input } from "@doar/components";
import { StyledDatePicker } from "./style";
import Calendar from "../calendar";

interface IProps {
    name: string;
    id: string;
    placeholder?: string;
    getDate: (name: string, date: string) => void;
    currentDate?: Date;
}

const DatePicker = ({
    name,
    id,
    placeholder,
    getDate,
    currentDate,
}: IProps) => {
    const [value, setValue] = useState<Date | Date[]>(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!currentDate) return;
        setValue(currentDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const dateChangeHandler = (date: Date | Date[]) => {
        const d: string = dayjs(date.toString()).format("ll");
        setValue(date);
        getDate(name, d);
    };

    const inputChangeHandler = () => {
        setValue(value);
    };

    const inputClickHandler = () => {
        setShow(true);
    };
    const inputBlurHandler = () => {
        setShow(false);
    };

    return (
        <StyledDatePicker $show={show}>
            <Input
                name={name}
                id={id}
                placeholder={placeholder}
                value={dayjs(value.toString()).format("ll")}
                onChange={inputChangeHandler}
                onClick={inputClickHandler}
                onBlur={inputBlurHandler}
            />
            <Calendar value={value} onChange={dateChangeHandler} />
        </StyledDatePicker>
    );
};

export default DatePicker;
