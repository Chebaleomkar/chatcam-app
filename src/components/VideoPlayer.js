import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="container ">
      <div className="row justify-content-center">
        {/* our own video */}
        {stream && (
          <div className="col-12 col-md-6">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title text-center">{name || 'Name'}</h5>
                <video playsInline muted ref={myVideo} autoPlay className="w-100" />
              </div>
            </div>
          </div>
        )}

        {callAccepted && !callEnded && (
          <div className="col-12 col-md-6">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title text-center">{call.name || 'Name'}</h5>
                <video playsInline ref={userVideo} autoPlay className="w-100" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
