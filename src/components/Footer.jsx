import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-col">
                    <h3>Fibre Optique France</h3>
                    <p>Expertise, Rapidité, Confiance.</p>
                    <p className="mt-sm">Auto-entrepreneur</p>
                    <p>SIRET : 000 000 000 00000</p>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>📞 06 00 00 00 00</p>
                    <p>📧 contact@fibre-optique-france.fr</p>
                    <p>📍 Paris & Île-de-France</p>
                </div>

                <div className="footer-col">
                    <h4>Liens Légaux</h4>
                    <ul>
                        <li><a href="#">Mentions Légales</a></li>
                        <li><a href="#">Politique de Confidentialité</a></li>
                        <li><a href="#">CGV</a></li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} Fibre Optique France. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
