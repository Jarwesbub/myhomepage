import SlideShow from '../components/slideshow';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/UglyUnicorn/image-1.jpg";
import img2 from "../assets/images/UglyUnicorn/image-2.jpg";
import img3 from "../assets/images/UglyUnicorn/image-3.png";

export default function UglyUnicornPage({ imageSlider }) {
    const scaleItem = window.innerWidth < imageSlider.width; // Boolean for checking max width for the slider
    const screenWidth = window.innerWidth - 40; // Current screen width minus margin
    const sliderWidth = scaleItem ? screenWidth : imageSlider.width;
    const sliderHeight = scaleItem ? (imageSlider.height / imageSlider.width) * screenWidth : imageSlider.height;

    // Scrolls window instantly to the top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });

    const slides = [
        { url: img1, title: "Menu" },
        { url: img2, title: "Gameplay1" },
        { url: img3, title: "Gameplay2" },
    ];

    const containerStyles = {
        width: sliderWidth + 'px',
        height: sliderHeight + 'px',

        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>Ugly Unicorn - Android Game</h2>
            <div style={containerStyles} >
                <SlideShow autoplay={true} slideImages={slides} imageHeight={sliderHeight + 'px'} />
            </div>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines-1080' style={{ marginBottom: '100px' }}>
                    <p>
                        2D Endless Runner -style game with increasing speed and rhythmic vibes
                    </p>
                    <p>"Ugly Unicorn is quirky endless runner -style game (demo), where the player tries to evade a dragon by collecting points to gather more speed."</p>
                </div>
            <div className='border-lines-1080' style={{ marginBottom: '100px' }}>
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