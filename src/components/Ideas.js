import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AmadeusService from "../services/amadeus";

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        margin: '15px'
    },
    image: {
        width:"150px",
        height:"150px",
        objectFit: 'cover',
    },
    destination: {
        margin: '0',
    },
    date: {
        margin: '0',
        fontSize: '10px',
        color: 'gray'
    },
    destinationPrice: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

function Ideas() {
    const classes = useStyles();
    const [items, setItems] = useState([]);

    useEffect(() => {
        AmadeusService
            .getAll()
            .then(bucketListItems => setItems(JSON.parse(bucketListItems.body).data));
    }, []);

    return (
        <div className={classes.wrapper}>
            {items.map(item => <div className={classes.item}>
                <img className={classes.image} src={"https://source.unsplash.com/featured/?" + item.destination} />
                <div className={classes.destinationPrice}>
                    <p className={classes.destination}>{item.destination}</p>
                    <p className={classes.destination}>{item.price.total + '£'}</p>
                </div>
                <p className={classes.date}>{item.departureDate} - {item.returnDate}</p>
            </div>)}
        </div>
    );
}

export default Ideas;
