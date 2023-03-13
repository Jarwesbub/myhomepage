import SlideShow from '../components/slideshow';
import './styles.css';
import img1 from '../assets/images/MashUps/redeckbuilding-smashup.png';
import img2 from '../assets/images/MashUps/uglyunicorn-smashup.png';
import img3 from '../assets/images/MashUps/racinggame-smashup.png';
import img4 from '../assets/images/MashUps/doggoinspace-smashup.png';
import img5 from '../assets/images/MashUps/tamram-smashup.png';

export default function FrontPage({imageSlider}) {
    const scaleItem = window.innerWidth<imageSlider.width; // Boolean for checking max width for the slider
    const screenWidth = window.innerWidth-40; // Current screen width minus margin
    const sliderWidth = scaleItem ? screenWidth : imageSlider.width;
    const sliderHeight = scaleItem ? (imageSlider.height/imageSlider.width)*screenWidth : imageSlider.height;

    const slides = [
        { url: img1, caption: "Resident Evil - Deck Building Online Game", link: "#/residentevildbg" },
        { url: img2, caption: "Ugly Unicorn", link: "#/uglyunicorn" },
        { url: img3, caption: "Racing Game", link: "#/racinggame" },
        { url: img4, caption: "Doggo in Space", link: "#/doggoinspace" },
        { url: img5, caption: "TamRam - Battle Creatures", link: "#/tamram" },
    ];

    const containerStyles = {
        width: sliderWidth+'px',
        height: sliderHeight+'px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h4 className='secondary-headline'>Some of My Projects:</h4>
            <div style={containerStyles} >
                <SlideShow autoplay={false} slideImages={slides} imageHeight={sliderHeight+'px'} />
            </div>
        </form>
    );
}