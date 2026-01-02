import React, { useState, useEffect } from 'react';
import './StickyAction.css';

const StickyAction = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Only show on mobile devices (CSS will handle this mostly, but good to have logic)
    // We render standard buttons
    return (
        <div className={`sticky-action-bar ${isVisible ? 'visible' : ''}`}>
            <a href="tel:+33659896116" className="sticky-btn phone">
                📞 Appeler
            </a>
            <a href="https://wa.me/33659896116" className="sticky-btn whatsapp" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
            </a>
        </div>
    );
};

export default StickyAction;
