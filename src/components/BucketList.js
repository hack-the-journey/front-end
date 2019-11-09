import React, { useState, useEffect } from "react";
import bucketListService from "../services/bucketlist";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import bucketlist from "../services/bucketlist";

function BucketList() {
  const [bucketList, setBucketList] = useState([]);

  useEffect(() => {
    bucketListService
      .getAll()
      .then(bucketListItems => setBucketList(bucketListItems));
  }, []);

  const handleDelete = id => {
    bucketListService
      .destroy(id)
      .then(returnedItem =>
        setBucketList(bucketList.filter(item => item.id !== id))
      );
  };

  return (
    <div className="App">
      <h1>BucketList</h1>
      <List component="nav" aria-label="main mailbox folders">
        {bucketList.map(item => (
          <ListItem key={item.id} button>
            <ListItemText primary={item.destination} />
            <Button
              onClick={() => handleDelete(item.id)}
              variant="contained"
              color="primary"
            >
              X
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default BucketList;
