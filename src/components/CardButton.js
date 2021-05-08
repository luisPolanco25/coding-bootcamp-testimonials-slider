import React, { useContext } from 'react';
import prev from '../assets/icon-prev.svg';
import next from '../assets/icon-next.svg';
import { SlideContext } from '../context/SlideContext';

export const CardButton = () => {

    const {isTanya, setIsTanya} = useContext(SlideContext);

    const handleChangeSlides = () => {
        setIsTanya(!isTanya);
    }
    
    return (
        <div id="buttons">

            <button 
                onClick={handleChangeSlides}
            >
                <img src={prev} alt="Previous card" />
            </button>

            <button 
                onClick={handleChangeSlides}
            >
                <img src={next} alt="Next card" />
            </button>

        </div>
    )
}
