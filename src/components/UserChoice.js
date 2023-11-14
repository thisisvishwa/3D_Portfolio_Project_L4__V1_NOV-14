```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserChoice = () => {
    const [choices, setChoices] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState(null);

    useEffect(() => {
        fetchChoices();
    }, []);

    const fetchChoices = async () => {
        try {
            const response = await axios.get('/userChoices');
            setChoices(response.data);
        } catch (error) {
            console.error('Error fetching user choices:', error);
        }
    };

    const handleChoiceSelection = (choice) => {
        setSelectedChoice(choice);
        // Here you can add the logic to handle the selected choice
        // For example, you can make a request to the server to update the user's choice
    };

    return (
        <div>
            <h2>User Choices</h2>
            {choices.map((choice, index) => (
                <div key={index}>
                    <p>{choice.description}</p>
                    <button onClick={() => handleChoiceSelection(choice)}>Select</button>
                </div>
            ))}
            {selectedChoice && (
                <div>
                    <h3>You selected:</h3>
                    <p>{selectedChoice.description}</p>
                </div>
            )}
        </div>
    );
};

export default UserChoice;
```