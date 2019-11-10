import React, {useEffect, useState} from 'react';
import DatePicker from './DatePicker';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import userProfileService from "../services/dates";
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const useStyles = makeStyles({
    addButton: {
        margin: "0.8rem"
    },
    dateRange: {
        display: 'flex'
    }

});

function UserProfile() {
    const classes = useStyles();
    const [datesRanges, setDateRanges] = useState([]);
    const [date, setDate] = useState([new Date(), new Date()]);
    const [location, setLocation] = useState("London");

    const onChange = date => setDate(date);

    useEffect(() => {
        userProfileService
            .getAll()
            .then(response => setDateRanges(response));
    }, []);

    const formateDate = (date) => {
        let current_datetime = date;
       return  current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();
    };

    const handleAdd = () => {

        if(!date)
            return;
        let dateFrom = formateDate(date[0]);
        let dateTo = formateDate(date[0]);


        const item = {
            "from": dateFrom,
            "to": dateTo,
            "id": "dateRange" + Date.now()
        };

        userProfileService.createDateRange(item).then(returnedDateRange => {
            setDateRanges([...datesRanges, item]);
        })
    };

    return (
        <div>
            <h1>Travel Bucket List</h1>
            <TextField
                label="Your Location"
                type="Search field"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                value={location}
            />
            <br/>
            <p>Enter your free days:</p>
            <DateRangePicker
                onChange={onChange}
                value={date}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.addButton}
            >
                Add
            </Button>

            {datesRanges.map(range => <p>{range.from.replace(/-/g, "/")} - {range.to.replace(/-/g, "/")}</p>)}

        </div>

    );
}

export default UserProfile;
