```javascript
import React, { useState, useEffect } from 'react';

const Animation = () => {
    const [animationState, setAnimationState] = useState(false);

    const handleAnimation = () => {
        setAnimationState(!animationState);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleAnimation();
        }, 5000);
        return () => clearTimeout(timer);
    }, [animationState]);

    return (
        <div className={`animation-container ${animationState ? 'animate' : ''}`} onClick={handleAnimation}>
            <div className="animation-content">
                {/* Animation content goes here */}
            </div>
        </div>
    );
}

export default Animation;
```