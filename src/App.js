import React from 'react';
import './App.css';
import { Container, AppBar, Typography } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';

function App() {
  const appBarStyle = {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '0',
  };
  const appName ={

  }

  return (
    <Container maxWidth="md" style={containerStyle}>
      <AppBar position="static" color="inherit" style={appBarStyle}>
        <Typography className='text-success' variant="h3" align="center" style={appName}>
        <VideoCallIcon fontSize='very very large' />   ChatCam
        </Typography>
      </AppBar>

      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Container>
  );
}

export default App;
