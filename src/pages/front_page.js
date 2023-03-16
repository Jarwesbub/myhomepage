import SlideShow from '../components/slideshow';
import './styles.css';
import img1 from '../assets/images/MashUps/redeckbuilding-smashup.png';
import img2 from '../assets/images/MashUps/uglyunicorn-smashup.png';
import img3 from '../assets/images/MashUps/racinggame-smashup.png';
import img4 from '../assets/images/MashUps/doggoinspace-smashup.png';
import img5 from '../assets/images/MashUps/tamram-smashup.png';

export default function FrontPage({ imageSlider }) {
    const scaleItem = window.innerWidth < imageSlider.width; // Boolean for checking max width for the slider
    const screenWidth = window.innerWidth - 40; // Current screen width minus margin
    const sliderWidth = scaleItem ? screenWidth : imageSlider.width;
    const sliderHeight = scaleItem ? (imageSlider.height / imageSlider.width) * screenWidth : imageSlider.height;

    const slides = [
        { url: img1, caption: "Resident Evil - Deck Building Online Game", link: "#/residentevildbg" },
        { url: img2, caption: "Ugly Unicorn", link: "#/uglyunicorn" },
        { url: img3, caption: "Racing Game", link: "#/racinggame" },
        { url: img4, caption: "Doggo in Space", link: "#/doggoinspace" },
        { url: img5, caption: "TamRam - Battle Creatures", link: "#/tamram" },
    ];

    const containerStyles = {
        width: sliderWidth + 'px',
        height: sliderHeight + 'px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h3 className='border-lines' style={{ marginTop: '60px', marginBottom: '60px' }}>Welcome</h3>
            <div style={{ margin: 'auto', marginBottom: '160px', maxWidth: '800px' }}>
                <p style={{ marginTop: '80px' }}>
                    Hello there, welcome to my website! Take a cup of hot drink and feel free to explore the deep. If you have any questions you can contact me from the bottom left bar. Enjoy!
                </p>
                <p style={{ marginTop: '80px' }}>Site is currently work in progress...</p>
                <p style={{ marginTop: '80px', fontWeight:'bolder'}}>but</p>
                <p className='border-lines' style={{ marginTop: "100px" }}>
                    "Talk is cheap. Show me the code." - Linus Torvalds
                </p>
                <p className='border-lines' style={{ marginTop: "20px" }}>
                    "Focus is a matter of deciding what things you're not going to do." - John Carmack
                </p>
            </div>
            <div className='border-lines' style={{ maxWidth: '800px', maxHeight: '730px' }}>
                <h4 style={{ padding: '20px', fontStyle: 'oblique' }}>Projects Slideshow 1:1</h4>
                <div style={containerStyles} >
                    <SlideShow autoplay={true} slideImages={slides} imageHeight={sliderHeight + 'px'} />
                </div>
            </div>
        </form>
    );
}