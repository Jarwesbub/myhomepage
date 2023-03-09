import SlideShow from '../components/slideshow';
import './styles.css';

const sliderSize = '600px';
const URL = process.env.PUBLIC_URL;

export default function FrontPage() {

    const slides = [
        { url: URL+"/assets/images/mashups/redeckbuilding-smashup.png", caption: "Resident Evil - Deck Building Online Game", link: "#/residentevildbg"},
        { url: URL+"/assets/images/mashups/uglyunicorn-smashup.png", caption: "Ugly Unicorn", link: "#/uglyunicorn"},
        { url: URL+"/assets/images/mashups/racinggame-smashup.png", caption: "Racing Game", link: "#/racinggame"},
        { url: URL+"/assets/images/mashups/doggoinspace-smashup.png", caption: "Doggo in Space", link: "#/doggoinspace"},
        { url: URL+"/assets/images/mashups/tamram-smashup.png", caption: "TamRam - Battle Creatures", link: "#/tamram"},
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