import React, {useContext, useEffect, useState} from 'react';
import {Context} from './context';

const DatePicker = () => {

    const {id, setId} = useContext(Context);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        fetch('/trends/dates')
            .then(response => response.json())
            .then(results => {
                const dates = processResuts(results)
                setDates(dates);
                setId(dates[0].id);
            })
    }, []);

    const processResuts = (results) => {
        return results
            .map(value => {
                value.timestamp = new Date(value.timestamp).toDateString();
                return value;
            })
            .reverse();
    }

    const handleChange = (e) => {
        setId(e.target.value);
    }

    return (
        <div className="date-picker">
            <select name="dates" value={id} onChange={handleChange}>
                {dates.map(value => <option value={value.id}>{value.timestamp}</option>)}
            </select>
        </div>
    );
};

export default DatePicker;