import React from 'react';
import BucketList from './components/BucketList'
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <BucketList></BucketList>
      <Button variant="contained" color="primary">
        Hello World
    </Button>
    </div>
  );
}

export default App;
