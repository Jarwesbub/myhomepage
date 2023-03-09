import ImageSlider from '../components/image_slider';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/TamRam/image-1.png";
import img2 from "../assets/images/TamRam/image-2.png";
import img3 from "../assets/images/TamRam/image-3.png";

export default function TamRamPage() {
    const slides = [
        { url: img1, title: "Gameplay1" },
        { url: img2, title: "Gameplay2" },
        { url: img3, title: "Gameplay3" },
    ];

    const containerStyles = {
        width: '1000px',
        height: '520px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>TamRam - Battle Creatures</h2>
            <div style={containerStyles} >
                <ImageSlider slides={slides} />
            </div>
            <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines'>
                    <p>
                    Tame your creature and fight your way to become the strongest
                    </p>
                    <p>Game where your job is to become the strongest creature of the islands. You can choose your character from 3 different classes. (Warrior, Rogue and Wizard) Every class has their unique abilities, strengths and weaknesses that may put you in advantage or disadvantage against certain enemies.
                        Use your skillpoints wisely on your creature and get prepared to fight the evils in Lava-Land!
                    
                    Project aimed for browser and PC. Made in Unity.</p>
                </div>
                <div className='border-lines'>
                    <p>Test the game on your browser:</p>
                <a href="https://jarwes.itch.io/tamram" title='itch.io'>Play now</a>
                </div>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"DyWSdeMznCk"} />
            </div>
        </form>
    );
}