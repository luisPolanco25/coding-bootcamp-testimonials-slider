import React, { useState } from 'react';
import { DisplayedCard } from './components/DisplayedCard';
import { SlideContext } from './context/SlideContext';
import './styles.css';

export const BootcampApp = () => {

    const [isTanya, setIsTanya] = useState(true);
    
    return (
        <div>
            <SlideContext.Provider value={{isTanya, setIsTanya}}>
                <DisplayedCard />
            </SlideContext.Provider>
        </div>
    )
}
