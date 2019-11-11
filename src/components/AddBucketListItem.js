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
    },

});

function AddBuckListItem({addNew}) {
    const classes = useStyles();
    const [newItem, setNewItem] = useState("");

    const handleChange = (evt) => {
        setNewItem(evt.target.value);
    };

    const handleAdd = (evt) => {
        console.log("tset");
        addNew(newItem);

    };
  return (
    <>
        <div className={classes.root} >
            <TextField
                label="I wan't to go to.."
                type="Search field"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                onChange={handleChange}
                value={newItem}
            />
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
