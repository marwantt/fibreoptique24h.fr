import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact-section" id="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2>Contactez-nous</h2>
                    <p className="contact-intro">
                        Une urgence ? Besoin d'un devis ?<br />
                        Nous vous répondons instantanément.
                    </p>

                    <div className="contact-methods">
                        <a href="tel:+33659896116" className="contact-card primary">
                            <span className="icon">📞</span>
                            <div>
                                <h3>Appeler</h3>
                                <p>06 59 89 61 16</p>
                            </div>
                        </a>
                        <a href="https://wa.me/33659896116" className="contact-card success" target="_blank" rel="noopener noreferrer">
                            <span className="icon">💬</span>
                            <div>
                                <h3>WhatsApp</h3>
                                <p>Réponse immédiate</p>
                            </div>
                        </a>
                        <a href="mailto:contact@fibreoptique24h.fr" className="contact-card">
                            <span className="icon">📧</span>
                            <div>
                                <h3>Email</h3>
                                <p>contact@fibreoptique24h.fr</p>
                            </div>
                        </a>
                    </div>

                    <div className="info-block">
                        <h4>📍 Zone d'intervention</h4>
                        <p>Paris (75) et toute l'Île-de-France (77, 78, 91, 92, 93, 94, 95)</p>
                    </div>

                    <div className="info-block">
                        <h4>⏰ Disponibilité</h4>
                        <p>24h/24 et 7j/7 - Dimanches et Jours Fériés inclus</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <h3>Message Rapid</h3>
                    <div className="form-group">
                        <label>Votre Nom</label>
                        <input type="text" placeholder="Nom Prénom" required />
                    </div>
                    <div className="form-group">
                        <label>Téléphone</label>
                        <input type="tel" placeholder="06 12 34 56 78" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Décrivez votre problème..." rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary full-width">Envoyer demande</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
