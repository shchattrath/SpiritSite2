import React from 'react';
import IgLogo from './images/ig.png';
import TTLogo from './images/tiktok.png';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.instagram.com/spiritseattle/?hl=en" target="_blank" rel="noopener noreferrer">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-glyph-black-white-large-png.png" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src={TTLogo} alt="TikTok" />
            </a>
        </footer>
    );
}

export default Footer;