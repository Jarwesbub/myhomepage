import SlideShow from '../components/slideshow';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/Softaustalo/softaustalo_ue2_editor_1.png";
import img2 from "../assets/images/Softaustalo/softaustalo_ue2_editor_3.png";
import img3 from "../assets/images/Softaustalo/softaustalo_ue2_gameplay_1.png";
import img4 from "../assets/images/Softaustalo/softaustalo_ue2_gameplay_2.png";
import img5 from "../assets/images/Softaustalo/softaustalo_ue2_gameplay_3.png";
import img6 from "../assets/images/Softaustalo/softaustalo_ue2_gameplay_4.png";
import img7 from "../assets/images/Softaustalo/softaustalo_ue2_gameplay_5.png";
import img8 from "../assets/images/Softaustalo/softaustalo_ue2_gameplay_6.png";
import img9 from "../assets/images/Softaustalo/softaustalo_ue2_gameplay_7.png";


export default function Softaustalo({ imageSlider }) {
    const scaleItem = window.innerWidth < imageSlider.width; // Boolean for checking max width for the slider
    const screenWidth = window.innerWidth - 40; // Current screen width minus margin
    const sliderWidth = scaleItem ? screenWidth : imageSlider.width;
    const sliderHeight = scaleItem ? (imageSlider.height / imageSlider.width) * screenWidth : imageSlider.height;

    const slides = [
        { url: img1, title: "Editor1" },
        { url: img3, title: "Gameplay1" },
        { url: img4, title: "Gameplay2" },
        { url: img5, title: "Gameplay3" },
        { url: img6, title: "Gameplay4" },
        { url: img7, title: "Gameplay5" },
        { url: img8, title: "Gameplay6" },
        { url: img9, title: "Gameplay7" },
        { url: img2, title: "Editor2" },
    ];

    const containerStyles = {
        width: sliderWidth + 'px',
        height: sliderHeight + 'px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>XIII (2003) - Unreal Editor 2 - Softaustalo</h2>
            <div style={containerStyles} >
                <SlideShow autoplay={false} slideImages={slides} imageHeight={sliderHeight + 'px'} />
            </div>
            <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines-1080'>
                    <p>
                    Map for the classic PC/console game&nbsp;<a href="https://en.wikipedia.org/wiki/XIII_(2003_video_game)" title='wikipedia.org' target="_blank" rel="noreferrer">XIII (2003)</a>
                        , created in Unreal Editor 2 by me. Project was quite a challenge to make thanks to the heavily outdated engine and game itself. Nowadays polygon count in 3D environment don’t matter as much as it did back in the days. It's amazing how dynamic lighting in Unreal Engine 2 really made games standout.
                        Map also supports full online play with max of 16 players in fanmade servers.
                    </p>
                    <p><br></br>More stuff coming soon!</p>
                </div>
            </div>
            <h3 className='secondary-headline'>Gameplay (with bots)</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"8fJ3Gz3AC3c"} />
            </div>
        </form>
    );
}