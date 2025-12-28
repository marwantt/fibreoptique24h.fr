import React from 'react';
import './Process.css';

const steps = [
    { num: "01", title: "Contact", desc: "Appel ou WhatsApp pour décrire votre problème." },
    { num: "02", title: "Diagnostic", desc: "Estimation gratuite et prise de rendez-vous immédiate." },
    { num: "03", title: "Intervention", desc: "Déplacement technicien sur place (Paris & IDF)." },
    { num: "04", title: "Résultat", desc: "Connexion 100% rétablie et stable." }
];

const Process = () => {
    return (
        <section className="section process-section">
            <div className="container">
                <h2 className="text-center mb-lg">Comment ça marche ?</h2>
                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-num">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
