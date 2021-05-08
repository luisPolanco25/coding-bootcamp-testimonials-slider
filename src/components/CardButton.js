import React, { useContext } from 'react';
import prev from '../assets/icon-prev.svg';
import next from '../assets/icon-next.svg';
import { SlideContext } from '../context/SlideContext';

export const CardButton = () => {

    const {isTanya, setIsTanya} = useContext(SlideContext);
    
    return (
        <div id="buttons">

            <button 
                onClick={() => setIsTanya(true)}
                disabled={isTanya}
            >
                <img src={prev} alt="Previous card" />
            </button>

            <button 
                onClick={() => setIsTanya(false)}
                disabled={!isTanya}
            >
                <img src={next} alt="Next card" />
            </button>

        </div>
    )
}
