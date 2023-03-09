import SlideShow from '../components/slideshow';
import './styles.css';
import img1 from '../assets/images/MashUps/redeckbuilding-smashup.png';
import img2 from '../assets/images/MashUps/uglyunicorn-smashup.png';
import img3 from '../assets/images/MashUps/racinggame-smashup.png';
import img4 from '../assets/images/MashUps/doggoinspace-smashup.png';
import img5 from '../assets/images/MashUps/tamram-smashup.png';

const sliderSize = '600px';

export default function FrontPage() {

    const slides = [
        { url: img1, caption: "Resident Evil - Deck Building Online Game", link: "#/residentevildbg"},
        { url: img2, caption: "Ugly Unicorn", link: "#/uglyunicorn"},
        { url: img3, caption: "Racing Game", link: "#/racinggame"},
        { url: img4, caption: "Doggo in Space", link: "#/doggoinspace"},
        { url: img5, caption: "TamRam - Battle Creatures", link: "#/tamram"},
    ];

    const containerStyles = {
        width: sliderSize,
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h3 className='secondary-headline'>Projects Slideshow:</h3>
            <div style={containerStyles} >
                <SlideShow slideImages={slides} boxSize={sliderSize} />
            </div>
        </form>
    );
}