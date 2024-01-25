import SlideShow from '../components/slideshow';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/SuperBubble/image-1.png";
import img2 from "../assets/images/SuperBubble/image-2.png";

export default function SuperBubblePage({ imageSlider }) {
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
        { url: img1, title: "Mashup" },
        { url: img2, title: "Editor" },
    ];

    const containerStyles = {
        width: sliderWidth + 'px',
        height: sliderHeight + 'px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>Super Bubble (demo)</h2>
            <div style={containerStyles} >
                <SlideShow autoplay={true} slideImages={slides} imageHeight={sliderHeight + 'px'} />
            </div>
            <h3 className='secondary-headline'>Info</h3>
            <div className='border-lines-1080' style={{ marginBottom: '100px' }}>
                <p>
                    Old school spirited puzzle game (demo) with familiar gameplay elements.
                </p>
                <p>Inspiration from the classic Playstation Net Yaroze title: Super Bub. This game is basically reimagined version of that awesome puzzle beater. This version was made with Game Maker Studio 2.
                </p>
                <p>...</p>
                <p>
                    Coding and all the very rough graphics are made by me back in 2017.
                </p>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"26h5UuWtPew"} />
            </div>
        </form>
    );
}