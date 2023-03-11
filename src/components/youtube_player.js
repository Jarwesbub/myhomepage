import YouTube from 'react-youtube';

export default function YoutubePlayer(props) {
  const maxPlayerWidth = 640; // Player width if it fits on the screen
  const margin = 40; // Margin for the player if size is scaled
  const playerWidth = window.innerWidth - margin < maxPlayerWidth ? window.innerWidth - margin : maxPlayerWidth;

  const opts = {
    height: playerWidth * 0.566, //Nearly perfect aspect ratio for Youtube videos
    width: playerWidth,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube videoId={props.videoId} opts={opts} />
  );
}