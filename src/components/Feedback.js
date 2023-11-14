```javascript
import React, { useState, useEffect } from 'react';

const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState(null);

    useEffect(() => {
        fetchFeedbackData();
    }, []);

    const fetchFeedbackData = async () => {
        try {
            const response = await fetch('/feedback');
            const data = await response.json();
            setFeedbackData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const renderFeedback = () => {
        if (!feedbackData) {
            return <div>Loading...</div>;
        }

        return feedbackData.map((feedback, index) => (
            <div key={index}>
                <h2>{feedback.title}</h2>
                <p>{feedback.message}</p>
            </div>
        ));
    };

    return (
        <div>
            <h1>Feedback</h1>
            {renderFeedback()}
        </div>
    );
};

export default Feedback;
```