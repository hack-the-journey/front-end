import React, {useEffect, useState} from 'react';
import DatePicker from './DatePicker';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import userProfileService from "../services/userprofile";

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
    const [dateFrom, setDateFrom] = useState({});
    const [dateTo, setDateTo] = useState({});

    useEffect(() => {
        userProfileService
            .getAll()
            .then(response => setDateRanges(response.dates));
    }, []);

    const handleAdd = () => {
        const item = {
            "from": dateFrom,
            "to": dateTo,
            "id": "dateRange" + Date.now()
        };

        userProfileService.createDateRange(item).then(returnedDateRange => {
            setDateRanges([...datesRanges, item]);
        })
    };

    const changeDateFrom = (date) =>{
        setDateFrom(date);
    };

    const changeDateTo = (date) =>{
        setDateTo(date);
    };

    return (
        <div>
            <h1>User profile</h1>
            <p>Location: London</p>
            <DatePicker changeDate={changeDateFrom}/>
            <DatePicker changeDate={changeDateTo}/>
            <Button
                variant="contained"
                color="primary"
                className={classes.addButton}
                onClick={handleAdd}
            >
                Add
            </Button>

            {datesRanges.map(range => <p>{range.from} : {range.to}</p>)}

        </div>

    );
}

export default UserProfile;
