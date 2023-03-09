import ImageSlider from '../components/image_slider';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';

export default function RacingGamePage() {
    const slides = [
        { url: "/assets/images/racinggame/image-1.png", title: "Gameplay1" },
        { url: "/assets/images/racinggame/image-2.png", title: "Gameplay2" },
    ];

    const containerStyles = {
        width: '1000px',
        height: '520px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>Racing Game - Android</h2>
            <div style={containerStyles} >
                <ImageSlider slides={slides} />
            </div>
            <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines'>
                    <p>
                    3D racing game for Android and PC with Retro PlayStation 1 vibes
                    </p>
                    <p>Racing game (demo) which is mainly aimed for mobile environment with touchscreen control scheme. Game is made by using Unity engine and car models are self made in Blender.</p>
                </div>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"tdy9ZAxmlzs"} />
            </div>
        </form>
    );
}