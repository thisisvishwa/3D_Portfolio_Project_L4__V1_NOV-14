```javascript
import React from 'react';

class SocialSharing extends React.Component {
    shareOnFacebook = () => {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)}`, 'newwindow', 'width=600, height=450');
    }

    shareOnTwitter = () => {
        const url = window.location.href;
        window.open(`https://twitter.com/share?url=${encodeURI(url)}`, 'newwindow', 'width=600, height=450');
    }

    shareOnLinkedIn = () => {
        const url = window.location.href;
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(url)}`, 'newwindow', 'width=600, height=450');
    }

    render() {
        return (
            <div id="socialSharing">
                <button onClick={this.shareOnFacebook}>Share on Facebook</button>
                <button onClick={this.shareOnTwitter}>Share on Twitter</button>
                <button onClick={this.shareOnLinkedIn}>Share on LinkedIn</button>
            </div>
        );
    }
}

export default SocialSharing;
```