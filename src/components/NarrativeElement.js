```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NarrativeElement = () => {
    const [narrativeData, setNarrativeData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/narrativeElements');
            setNarrativeData(response.data);
        } catch (error) {
            console.error('Error fetching narrative data:', error);
        }
    };

    const renderNarrativeElement = () => {
        if (!narrativeData) {
            return <div>Loading...</div>;
        }

        return (
            <div id="narrativeElement">
                <h2>{narrativeData.title}</h2>
                <p>{narrativeData.content}</p>
            </div>
        );
    };

    return (
        <div>
            {renderNarrativeElement()}
        </div>
    );
};

export default NarrativeElement;
```