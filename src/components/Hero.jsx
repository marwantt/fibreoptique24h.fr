import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="badge">🟢 Disponible 24h/24 – 7j/7</div>
                <h1 className="hero-title">
                    Dépannage Fibre Optique <span className="text-accent">Urgent</span><br />
                    Paris 24/7
                </h1>
                <p className="hero-subtitle">
                    Coupure internet ? Fibre endommagée ?<br />
                    Intervention rapide jour et nuit sur Paris & Île-de-France.
                </p>

                <div className="hero-actions">
                    <a href="tel:+33659896116" className="btn btn-primary btn-lg">
                        📞 Appeler maintenant
                    </a>
                    <a href="https://wa.me/33659896116" className="btn btn-success btn-lg" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp
                    </a>
                </div>

                <div className="hero-footer">
                    <p>✅ Technicien Agréé</p>
                    <p>✅ Intervention &lt; 2h</p>
                    <p>✅ Devis Gratuit</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
