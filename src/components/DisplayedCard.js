import React from 'react';
import backImage from '../assets/pattern-bg.svg';
import quoteImage from '../assets/pattern-quotes.svg';
import curveImage from '../assets/pattern-curve.svg';
import tanya from '../assets/image-tanya.jpg';
import { CardButton } from './CardButton';

export const DisplayedCard = () => {
    return (
        <div id="card">
            <div id="quote">
                <img id ="quote-icon" src={quoteImage} alt="Quote icon" />
                <p id="phrase">
                “ I’ve been interested in coding for a while but never taken the jump, until now.
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                excited about the future. ”
                </p>
                
                <p id="author">Tanya Sinclair <span>UX Engineer</span></p>
            </div>
            <div id="pictures">
                <img id="back-image" src={backImage} alt="Card's background img" />
                <img id="author-image" src={tanya} alt="Quote's author" />
            </div>
            <img id="curved-image" src={curveImage} alt="Curved pattern" />
            <CardButton />
        </div>
    )
}
