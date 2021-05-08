import React, { useContext } from 'react';
import backImage from '../assets/pattern-bg.svg';
import quoteImage from '../assets/pattern-quotes.svg';
import curveImage from '../assets/pattern-curve.svg';
import tanya from '../assets/image-tanya.jpg';
import john from '../assets/image-john.jpg';
import { CardButton } from './CardButton';
import { SlideContext } from '../context/SlideContext';

export const DisplayedCard = () => {

    const {isTanya} = useContext(SlideContext);
    
    return (
        <div id="card">
            <div id="quote">
                <img id ="quote-icon" src={quoteImage} alt="Quote icon" />
                <p id="phrase">
                    {
                        (isTanya)
                        ?
                        `“ I’ve been interested in coding for a while but never taken the jump, until now.
                        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                        excited about the future. ”`
                        :
                        `“ If you want to lay the best foundation possible I’d recommend taking this course. 
                        The depth the instructors go into is incredible. I now feel so confident about 
                        starting up as a professional developer. ”`
                    }
                </p>
                
                
                    {
                        (isTanya)
                        ?
                        <p id="author">Tanya Sinclair <span>UX Engineer</span></p> 
                        : 
                        <p id="author">John Tarkpor <span>Junior Front-end Developer</span></p>
                    }
                
            </div>
            <div id="pictures">
                <img id="back-image" src={backImage} alt="Card's background img" />
                {
                    (isTanya)
                    ?
                    <img id="author-image" src={tanya} alt="Quote's author" />
                    :
                    <img id="author-image" src={john} alt="Quote's author" />
                }
            </div>
            <img id="curved-image" src={curveImage} alt="Curved pattern" />
            <CardButton />
        </div>
    )
}
