import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            q: "Combien coûte une intervention ?",
            a: "Nos tarifs sont transparents. Un devis gratuit est établi avant toute intervention. Pour un dépannage simple, nous proposons des forfaits compétitifs incluant le déplacement."
        },
        {
            q: "Intervenez-vous le dimanche ?",
            a: "Oui ! Nous sommes disponibles 24h/24 et 7j/7, y compris les dimanches et jours fériés pour les urgences."
        },
        {
            q: "Quel est votre délai d'intervention ?",
            a: "Nous visons une intervention dans les 2 heures suivant votre appel pour les urgences sur Paris et la petite couronne."
        },
        {
            q: "Faites-vous l'installation de prises optiques (PTO) ?",
            a: "Absolument. Nous déplaçons ou installons de nouvelles prises optiques selon vos besoins (salon, chambre, bureau)."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq-section">
            <div className="container">
                <h2 className="text-center mb-lg">Questions Fréquentes</h2>
                <div className="faq-list">
                    {questions.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleAccordion(index)}>
                                {item.q}
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
