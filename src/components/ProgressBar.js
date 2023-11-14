```javascript
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetch('/progress')
            .then(response => response.json())
            .then(data => setProgress(data.progress));
    }, []);

    return (
        <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;
```