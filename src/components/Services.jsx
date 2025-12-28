import React from 'react';
import './Services.css';

const services = [
    {
        icon: "⚡",
        title: "Dépannage Urgent",
        description: "Intervention rapide pour rétablir votre connexion internet. Diagnostic précis et réparation immédiate."
    },
    {
        icon: "🔌",
        title: "Installation Fibre",
        description: "Raccordement de votre logement ou local commercial. Installation propre et discrète."
    },
    {
        icon: "🏗️",
        title: "Rénovation & Déplacement",
        description: "Déplacement de prise fibre optique (PTO) et rénovation de câblage dans les bâtiments anciens."
    },
    {
        icon: "🔧",
        title: "Réparation Câble",
        description: "Soudure de fibre optique cassée ou pliée. Remplacement de jarretière endommagée."
    }
];

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <h2 className="title text-center">Nos Services</h2>
                <p className="subtitle text-center">Intervention pour Particuliers & Professionnels sur Paris</p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
