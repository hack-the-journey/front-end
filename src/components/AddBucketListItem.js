import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

function AddBuckListItem() {
  return (
    <>
      <TextField
        id="newBucketListItem"
        label="Add New"
        type="search"
        margin="normal"
        variant="outlined"
      />
    </>
  );
}

export default AddBuckListItem;
