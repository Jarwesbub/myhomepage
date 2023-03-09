import { useState } from 'react';
import SlideShow from '../components/slideshow';
import ImageTimerSlider from '../components/image_timer_slider';
import './styles.css';

const sliderSize = '600px';
const repoName = process.env.REPOSITORY_NAME;

export default function FrontPage() {

    const slides = [
        { url: "./"+repoName+"/assets/images/mashups/redeckbuilding-smashup.png", caption: "Resident Evil - Deck Building Online Game", link: "#/residentevildbg"},
        { url: "./"+repoName+"/assets/images/mashups/uglyunicorn-smashup.png", caption: "Ugly Unicorn", link: "#/uglyunicorn"},
        { url: "./"+repoName+"/assets/images/mashups/racinggame-smashup.png", caption: "Racing Game", link: "#/racinggame"},
        { url: "./"+repoName+"/assets/images/mashups/doggoinspace-smashup.png", caption: "Doggo in Space", link: "#/doggoinspace"},
        { url: "./"+repoName+"/assets/images/mashups/tamram-smashup.png", caption: "TamRam - Battle Creatures", link: "#/tamram"},
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