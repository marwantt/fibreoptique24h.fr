import React from 'react';
import technicianImg from '../assets/technician.png';
import './Trust.css';

const Trust = () => {
    return (
        <section className="section trust-section">
            <div className="container trust-container">
                <div className="trust-content">
                    <h2>Pourquoi nous faire confiance ?</h2>
                    <ul className="trust-list">
                        <li>✅ <strong>Technicien Expérimenté :</strong> Expert en fibre optique et réseaux.</li>
                        <li>✅ <strong>Agrée & Déclaré :</strong> Auto-entrepreneur avec assurance professionnelle.</li>
                        <li>✅ <strong>Intervention Rapide :</strong> Nous traitons vos urgences jour, nuit et week-end.</li>
                        <li>✅ <strong>Travail Soigné :</strong> Installation propre, respectueuse de votre intérieur.</li>
                    </ul>
                    <div className="compatibility-box">
                        <h4>Compatible toutes box :</h4>
                        <p>Orange, SFR, Bouygues Télécom, Free, RED, Sosh...</p>
                    </div>
                    <div className="cta-wrapper">
                        <a href="tel:+33600000000" className="btn btn-primary">Appeler le technicien</a>
                    </div>
                </div>
                <div className="trust-image">
                    <img src={technicianImg} alt="Technicien fibre optique professionnel" />
                </div>
            </div>
        </section>
    );
};

export default Trust;
