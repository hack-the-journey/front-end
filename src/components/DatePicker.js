import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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


function DatePicker() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

export default DatePicker;
