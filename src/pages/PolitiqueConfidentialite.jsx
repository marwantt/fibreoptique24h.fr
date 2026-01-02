import React, { useEffect } from 'react';

const PolitiqueConfidentialite = ({ onClose }) => {
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
                    <h1>Politique de Confidentialité</h1>

                    <section>
                        <h2>1. Collecte des données</h2>
                        <p>Nous collectons les informations suivantes lors de l'utilisation du formulaire de contact :</p>
                        <ul>
                            <li>Nom et Prénom</li>
                            <li>Numéro de téléphone</li>
                            <li>Adresse email</li>
                            <li>Adresse d'intervention</li>
                        </ul>
                    </section>

                    <section>
                        <h2>2. Utilisation des données</h2>
                        <p>Ces données sont utilisées uniquement dans le but de :</p>
                        <ul>
                            <li>Vous recontacter pour votre demande d'intervention</li>
                            <li>Établir un devis ou une facture</li>
                            <li>Assurer le suivi de la prestation</li>
                        </ul>
                        <p>Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.</p>
                    </section>

                    <section>
                        <h2>3. Durée de conservation</h2>
                        <p>Les données reçues via le formulaire de contact sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, sauf obligation légale contraire (facturation).</p>
                    </section>

                    <section>
                        <h2>4. Vos droits (RGPD)</h2>
                        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : contact@fibreoptique24h.fr</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PolitiqueConfidentialite;
