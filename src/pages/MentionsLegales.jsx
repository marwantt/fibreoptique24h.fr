import React, { useEffect } from 'react';

const MentionsLegales = ({ onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="legal-content">
                    <h1>Mentions Légales</h1>

                    <section>
                        <h2>1. Éditeur du site</h2>
                        <p>Le site <strong>fibreoptique24h.fr</strong> est édité par :</p>
                        <p><strong>Fibre Optique France</strong></p>
                        <p>Statut : Auto-entrepreneur (Micro-entreprise)</p>
                        <p>SIRET : 893 786 632 00016</p>
                        <p>Siège social : Paris & Île-de-France</p>
                        <p>Téléphone : 06 59 89 61 16</p>
                        <p>Email : contact@fibreoptique24h.fr</p>
                    </section>

                    <section>
                        <h2>2. Directeur de la publication</h2>
                        <p>Directeur de la publication : Fibre Optique France</p>
                    </section>

                    <section>
                        <h2>3. Hébergement</h2>
                        <p>Le site est hébergé par :</p>
                        <p><strong>Vercel Inc.</strong></p>
                        <p>340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
                        <p>Site web : https://vercel.com</p>
                    </section>

                    <section>
                        <h2>4. Propriété intellectuelle</h2>
                        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MentionsLegales;
