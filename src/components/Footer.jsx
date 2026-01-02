import React, { useState } from 'react';
import './Footer.css';
import '../pages/Legal.css';
import MentionsLegales from '../pages/MentionsLegales';
import PolitiqueConfidentialite from '../pages/PolitiqueConfidentialite';
import CGV from '../pages/CGV';

const Footer = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (e, modalName) => {
        e.preventDefault();
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            <footer className="footer">
                <div className="container footer-container">

                    <div className="footer-col">
                        <h3>Fibre Optique France</h3>
                        <p>Expertise, Rapidité, Confiance.</p>
                        <p className="mt-sm">Auto-entrepreneur</p>
                        <p>SIRET : 893 786 632 00016</p>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="tel:+33659896116">📞 06 59 89 61 16</a>
                        <a href="mailto:contact@fibreoptique24h.fr">📧 contact@fibreoptique24h.fr</a>
                        <p>📍 Paris & Île-de-France</p>
                    </div>

                    <div className="footer-col">
                        <h4>Liens Légaux</h4>
                        <ul>
                            <li><a href="#" onClick={(e) => openModal(e, 'mentions')}>Mentions Légales</a></li>
                            <li><a href="#" onClick={(e) => openModal(e, 'politique')}>Politique de Confidentialité</a></li>
                            <li><a href="#" onClick={(e) => openModal(e, 'cgv')}>CGV</a></li>
                        </ul>
                    </div>

                </div>
                <div className="footer-bottom text-center">
                    <p>&copy; {new Date().getFullYear()} Fibre Optique France. Tous droits réservés.</p>
                </div>
            </footer>

            {activeModal === 'mentions' && <MentionsLegales onClose={closeModal} />}
            {activeModal === 'politique' && <PolitiqueConfidentialite onClose={closeModal} />}
            {activeModal === 'cgv' && <CGV onClose={closeModal} />}
        </>
    );
};

export default Footer;
