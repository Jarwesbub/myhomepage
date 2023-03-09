import ImageSlider from '../components/image_slider';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';

const URL = process.env.PUBLIC_URL;

export default function DoggoInSpacePage() {
    const slides = [
        { url: URL+"/assets/images/doggoinspace/image-1.png", title: "Menu" },
        { url: URL+"/assets/images/doggoinspace/image-2.png", title: "Gameplay1" },
    ];

    const containerStyles = {
        width: '1000px',
        height: '520px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>Doggo in Space</h2>
            <div style={containerStyles} >
                <ImageSlider slides={slides} />
            </div>
            <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines'>
                    <p>
                    Space exploration where your goal is to survive in earth's exosphere as long as possible
                    </p>
                    <p>Flappy bird styled gameplay with the spice of space elements. This is endless runner where your job is to keep going as long as possible. High score is based on time you spend in space without crashing.
                    Project aimed for mobile devices and on "itch.io" (browser). Made in Unity.</p>
                </div>
                <div className='border-lines'>
                    <p>Test the game on your browser:</p>
                <a href="https://jarwes.itch.io/doggoinspace2" title='itch.io'>Play now</a>
                </div>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"cOuAjDFyc20"} />
            </div>
        </form>
    );
}