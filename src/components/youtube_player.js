import React from 'react';
import YouTube from 'react-youtube';

export default function YoutubePlayer(props)  {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
  
  return (
  <YouTube videoId={props.videoId} opts={opts} />
  );
}