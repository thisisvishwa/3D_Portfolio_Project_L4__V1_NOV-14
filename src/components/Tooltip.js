```javascript
import React, { useState, useEffect } from 'react';

const Tooltip = ({ targetId, message }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [targetElement, setTargetElement] = useState(null);

    useEffect(() => {
        setTargetElement(document.getElementById(targetId));
    }, [targetId]);

    const showTooltip = () => {
        setIsVisible(true);
    };

    const hideTooltip = () => {
        setIsVisible(false);
    };

    return (
        <div 
            className={`tooltip ${isVisible ? 'visible' : ''}`} 
            onMouseEnter={showTooltip} 
            onMouseLeave={hideTooltip}
        >
            {message}
        </div>
    );
};

export default Tooltip;
```