import SlideShow from '../components/slideshow';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/ReDBG/image-1.png";
import img2 from "../assets/images/ReDBG/image-2.png";


export default function ReDeckBuilingGame({ imageSlider }) {
    const scaleItem = window.innerWidth < imageSlider.width; // Boolean for checking max width for the slider
    const screenWidth = window.innerWidth - 40; // Current screen width minus margin
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
    ];

    return (
        <form className="main-page">
            <h2 className='main-headline'>Resident Evil - Deck Building Online Game - Fan Project</h2>
            <div className='image-slider'style={{ marginBottom: '80px' }}>
                <SlideShow autoplay={true} slideImages={slides} imageHeight={sliderHeight + 'px'} />
            </div>
            <h3 className='secondary-headline'>Info</h3>
            <div className='border-lines-1080' style={{ marginBottom: '100px' }}>
                <p>
                    When one of your favorite board games has been discontinued for over 10 years and aftermarket is almost nonexistent. What to do when you want to play it with friends? Make your own version of it of course! This fan project is made for long discontinued board game: “Resident Evil -Deck Building Game” but with fully functional online play. Demo uses already existing cards from the game and combines the original board game concept with online play. Game runs on Unity’s latest engine and can hold up to 20 players in one game session. Game mechanics resemble the popular Table Top Simulator -game which provides authentic feel of your late night board gaming with friends. Ofcourse try not to cheat on the game. You may get kicked out of the club!
                </p>
            </div>
            <div className='border-lines-1080' style={{ marginBottom: '100px' }}>
                    <p>
                        Check out more about this project in my&nbsp;
                    </p>
                    <a href="https://github.com/Jarwesbub/RE-DeckBuildingGame" title='github.com' target="_blank" rel="noreferrer">GitHub repository</a>
                </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"-OpUsooNXgM"} />
            </div>
        </form>
    );
}