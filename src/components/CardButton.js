import React from 'react';
import prev from '../assets/icon-prev.svg';
import next from '../assets/icon-next.svg';

export const CardButton = () => {
    return (
        <div id="buttons">
            <button>
                <img src={prev} alt="Previous card" />
            </button>
            <button>
                <img src={next} alt="Next card" />
            </button>
        </div>
    )
}
