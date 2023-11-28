import SlideShow from '../components/slideshow';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/TamRam/image-1.png";
import img2 from "../assets/images/TamRam/image-2.png";
import img3 from "../assets/images/TamRam/image-3.png";

export default function TamRamPage({ imageSlider }) {
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
        { url: img1, title: "Gameplay1" },
        { url: img2, title: "Gameplay2" },
        { url: img3, title: "Gameplay3" },
    ];

    const containerStyles = {
        width: sliderWidth + 'px',
        height: sliderHeight + 'px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>TamRam - Battle Creatures</h2>
            <div style={containerStyles} >
                <SlideShow autoplay={false} slideImages={slides} imageHeight={sliderHeight + 'px'} />
            </div>
            <h3 className='secondary-headline'>Info</h3>
            <div className='border-lines-1080' style={{ marginBottom: '100px' }}>
                <p>
                    Tame your creature and fight your way to become the strongest
                </p>
                <p>Game where your job is to become the strongest creature of the islands. You can choose your character from 3 different classes. (Warrior, Rogue and Wizard) Every class has their unique abilities, strengths and weaknesses that may put you in advantage or disadvantage against certain enemies.
                    Use your skillpoints wisely on your creature and get prepared to fight the evils in Lava-Land!
                    Project aimed for the web browser and PC.</p>
            </div>
            <div className='border-lines-1080' style={{ marginBottom: '100px' }}>
                <p>Test the game on your browser:</p>
                <a href="https://jarwes.itch.io/tamram" title='itch.io'>Play now</a>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"DyWSdeMznCk"} />
            </div>
        </form>
    );
}