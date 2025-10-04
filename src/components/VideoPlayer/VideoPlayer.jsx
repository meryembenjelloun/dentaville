import React, {useRef} from 'react'
import './VideoPlayer.css'
import video from '../../assets/presentation.mp4'
const VideoPlayer = ({state,setState}) => {
    const player = useRef(null);
    const videoRef = useRef(null);
    
    const close =(e) =>{
        if(e.target === player.current){
            if (videoRef.current) {
                videoRef.current.pause();     
                videoRef.current.currentTime = 0;  
              }
            setState(false);
        }
    }

  return (
    <div className={`videoplay ${state?'': 'hide'}`} ref={player} onClick={close}>
        <video src={video}
         ref={videoRef}
         controls
         autoPlay muted loop
        >
        </video>
      
    </div>
  )
}

export default VideoPlayer
