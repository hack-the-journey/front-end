import React, {useState, useEffect} from 'react';
import bucketListService from '../services/bucketlist';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';



function BucketList() {
    const [bucketList, setBucketList] = useState([]);

    useEffect(() => {
        bucketListService.getAll().then(bucketListItems => setBucketList(bucketListItems));
    }, []);

  return (
    <div className="App">
      <h1>BucketList</h1>
        <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
        </List>
        {bucketList.map(item => <p>{item.destination}</p>)}
    </div>
  );
}

export default BucketList;
