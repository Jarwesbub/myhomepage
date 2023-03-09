import ImageSlider from '../components/image_slider';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';

const URL = process.env.PUBLIC_URL;

export default function ReDeckBuilingGame() {
    const slides = [
        { url: URL+"/assets/images/redbg/image-1.png", title: "Menu" },
        { url: URL+"/assets/images/redbg/image-2.png", title: "Gameplay1" },
    ];

    const containerStyles = {
        width: '1000px',
        height: '520px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
                <h2 className='main-headline'>Resident Evil - Deck Building Online Game - Fan Project</h2>
                <div style={containerStyles} >
                    <ImageSlider slides={slides} />
                </div>
                <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines'>
                    <p>
                        When one of your favorite board games has been discontinued for over 10 years and aftermarket is almost nonexistent. What to do when you want to play it with friends? Make your own version of it of course! This fan project is made for long discontinued boardgame: “Resident Evil -Deck Building Game” but with fully functional online play. Demo uses already existing cards from the game and combines the original board game concept with online play. Game runs on Unity’s latest engine and can hold up to 20 players in one game session. Game mechanics resemble the popular Table Top Simulator -game which provides authentic feel of your late night board gaming with friends. Ofcourse try not to cheat on the game. You may get kicked out of the club!
                    </p>
                    <p>(This game is not aimed to be published in public due the “Resident Evil” trademark)</p>
                </div>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"-OpUsooNXgM"} />
            </div>
        </form>
    );
}