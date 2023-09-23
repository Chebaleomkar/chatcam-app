import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  

  return (
    <>
   
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h4>{call.name || 'unknown'} is calling ...</h4>
          <Button className='mx-2' variant='contained' color='warning' onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
