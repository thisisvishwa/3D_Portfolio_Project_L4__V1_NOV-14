```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EasterEgg = () => {
    const [easterEgg, setEasterEgg] = useState(null);

    useEffect(() => {
        const fetchEasterEgg = async () => {
            try {
                const response = await axios.get('/api/easterEggs');
                setEasterEgg(response.data);
            } catch (error) {
                console.error('Error fetching easter egg:', error);
            }
        };

        fetchEasterEgg();
    }, []);

    const revealEasterEgg = () => {
        // Logic for revealing the easter egg goes here
    };

    return (
        <div id="easterEgg" style={{ display: 'none' }}>
            {easterEgg && (
                <div>
                    <h2>{easterEgg.title}</h2>
                    <p>{easterEgg.description}</p>
                    <button onClick={revealEasterEgg}>Reveal Easter Egg</button>
                </div>
            )}
        </div>
    );
};

export default EasterEgg;
```