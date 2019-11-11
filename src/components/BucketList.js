import React, { useState, useEffect } from "react";
import bucketListService from "../services/bucketlist";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import AddBucketListItem from "./AddBucketListItem";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    removeButton: {
        minWidth: "unset"
    },
});


function BucketList() {
  const classes = useStyles();
  const [bucketList, setBucketList] = useState([]);

  const handleNewItem = (newItem) => {
      const item = {
          "destination": newItem,
          "id": newItem + Date.now()
      };

      bucketListService.create(item).then(returnedItem => {
          setBucketList([...bucketList, returnedItem]);
      })

    };

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
      <AddBucketListItem addNew={handleNewItem}/>
      <List component="nav" aria-label="main mailbox folders">
        {bucketList.map(item => (
          <ListItem key={item.id} button>
              <ListItemAvatar>
                  <Avatar
                      alt={item.destination}
                      src={"https://source.unsplash.com/featured/?" + item.destination}
                  />
              </ListItemAvatar>
            <ListItemText primary={item.destination} />
            <Button
              onClick={() => handleDelete(item.id)}
              variant="contained"
              color="primary"
              className={classes.removeButton}
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
