import ImageSlider from '../components/image_slider';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';

const URL = process.env.PUBLIC_URL;

export default function UglyUnicornPage() {
    const slides = [
        { url: URL+"/assets/images/uglyunicorn/image-1.jpg", title: "Menu" },
        { url: URL+"/assets/images/uglyunicorn/image-2.png", title: "Gameplay1" },
    ];

    const containerStyles = {
        width: '1000px',
        height: '520px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>Ugly Unicorn - Android Game</h2>
            <div style={containerStyles} >
                <ImageSlider slides={slides} />
            </div>
            <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines'>
                    <p>
                        2D Endless Runner -style game with increasing speed and rhythmic vibes
                    </p>
                    <p>"Ugly Unicorn is quirky endless runner -style game (demo), where the player tries to evade a dragon by collecting points to gather more speed."</p>
                </div>
            </div>
            <div className='border-lines'>
                    <p>Play the game for free in:</p>
                <a href="https://play.google.com/store/apps/details?id=com.RaatoGames.UglyUnicorn&pli=1" title='https://play.google.com/store/apps/details?id=com.RaatoGames.UglyUnicorn&pli=1'>Google Play Store</a>
                </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"OHVrjdrXkQ4"} />
            </div>
        </form>
    );
}