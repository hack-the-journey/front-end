import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import bucketListService from "../services/bucketlist";


const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    addButton: {
        margin: "0.8rem"
    }

});

function AddBuckListItem({addNew}) {
    const classes = useStyles();
    const [newItem, setNewItem] = useState("");

    const handleChange = (evt) => {
        setNewItem(evt.target.value);
    };

    const handleAdd = (evt) => {
        addNew(newItem);
        console.log("tset");
    };
  return (
    <>
        <div className={classes.root} >
          <TextField
            id="newBucketListItem"
            label="Add New"
            type="search"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          >{newItem}</TextField>
            <Button
                onClick={() => handleAdd()}
                variant="contained"
                color="primary"
                className={classes.addButton}
            >
                Add

            </Button>
        </div>
    </>
  );
}

export default AddBuckListItem;
