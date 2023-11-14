```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BadgeDisplay = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/achievements');
            setAchievements(response.data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (
        <div id="badgeDisplay">
            {achievements.map((achievement) => (
                <div key={achievement._id} className="badge">
                    <img src={achievement.badgeIcon} alt={achievement.name} />
                    <p>{achievement.name}</p>
                </div>
            ))}
        </div>
    );
};

export default BadgeDisplay;
```