import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const URL = "/myhomepage";

export default function Slideshow(props) {
    const spanStyle = {
        padding: '5px',
        fontSize: '28px',
        textShadow: '2px 2px 4px #000000',
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: props.boxSize,
    }
    return (
        <div className="slide-container">
            <Slide>
                {props.slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle}>
                                <a href={URL+slideImage.link} style={{textDecoration:'none', color: 'white'}}>{slideImage.caption}</a>
                                </span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}