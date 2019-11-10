import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import userProfileService from "../services/dates";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


function DatePicker({changeDate}) {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    useEffect(() => {
        changeDate(selectedDate);
    }, []);

    const handleDateChange = evt => {
        let date = evt.target.value;
        setSelectedDate(date);
        changeDate(date);
    };

    return (
        <TextField
            onChange={handleDateChange}
            id="date"
            label="date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}

export default DatePicker;
