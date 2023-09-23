import React, { useState, useContext } from 'react';
import { SocketContext } from '../SocketContext';
import copy from 'copy-to-clipboard';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const copyToClipboard = () => {
    copy(me);
  };
  console.log(me)

 

  return (
    <div className="container">
      <div className="card p-3">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h6 className="mb-3">Account Info</h6>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-block my-3" onClick={copyToClipboard}>
             <ContentCopyIcon />  Copy Your ID  
            </button>
          </div>
          <div className="col-md-6 mb-4">
            <h6 className="mb-3">Make a call</h6>
            <div className="form-group">
              <label>ID to call</label>
              <input
                type="text"
                className="form-control"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
            </div>
            {callAccepted && !callEnded ? (
              <button className="btn btn-danger btn-block my-3 " onClick={leaveCall}>
              <CallEndIcon />  Hang Up
              </button>
            ) : (
              <button className="btn btn-primary btn-block my-3   "  onClick={() => callUser(idToCall)}>
               <LocalPhoneIcon />  Call
              </button>
            )}
              {children}
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Options;
