import React, { useEffect } from 'react';

const CGV = ({ onClose }) => {
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
                    <h1>Conditions Générales de Vente (CGV)</h1>

                    <section>
                        <h2>1. Objet</h2>
                        <p>Les présentes CGV régissent les relations contractuelles entre <strong>Fibre Optique France</strong> et son client, dans le cadre de prestations de services liées à l'installation, le dépannage et la maintenance de réseaux fibre optique.</p>
                    </section>

                    <section>
                        <h2>2. Tarifs et Devis</h2>
                        <p>Les tarifs sont indiqués en Euros Hors Taxes (TVA non applicable, art. 293 B du CGI pour les auto-entrepreneurs). Un devis gratuit est établi avant toute intervention majeure. Pour les dépannages d'urgence, une tarification forfaitaire peut être communiquée par téléphone ou SMS avant déplacement.</p>
                    </section>

                    <section>
                        <h2>3. Paiement</h2>
                        <p>Le paiement est exigible immédiatement à la fin de l'intervention. Les modes de paiement acceptés sont : espèces, virement bancaire instantané. Une facture est remise au client sur demande.</p>
                    </section>

                    <section>
                        <h2>4. Obligations du client</h2>
                        <p>Le client s'engage à fournir un accès sécurisé aux équipements nécessaires (armoire technique, PTO, etc.). En cas d'impossibilité technique non signalée avant le déplacement, des frais de déplacement pourront être facturés.</p>
                    </section>

                    <section>
                        <h2>5. Garantie et Responsabilité</h2>
                        <p>L'entreprise s'engage à une obligation de moyens. La responsabilité de Fibre Optique France ne saurait être engagée en cas de défaillance du réseau opérateur (FAI) ou de force majeure.</p>
                    </section>

                    <section>
                        <h2>6. Droit applicable</h2>
                        <p>Tout litige relatif à l'interprétation et à l'exécution des présentes CGV est soumis au droit français.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CGV;
