import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sophie M.",
            location: "Paris 15ème",
            text: "Intervention ultra rapide ! Mon opérateur m'avait donné un rendez-vous dans 3 semaines. Fibre Optique France est venu le jour même. Tout marche parfaitement.",
            rating: 5
        },
        {
            name: "Karim B.",
            location: "Boulogne-Billancourt",
            text: "Très pro. Le technicien a refait le câblage proprement dans mon salon. Je recommande à 100%.",
            rating: 5
        },
        {
            name: "Agence Immobilière Nexity",
            location: "Saint-Denis",
            text: "Partenaire fiable pour nos locataires. Interventions toujours efficaces et tarifs clairs. Merci !",
            rating: 5
        }
    ];

    return (
        <section className="section testimonials-section">
            <div className="container">
                <h2 className="text-center mb-lg">Ils nous font confiance</h2>
                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">{"⭐".repeat(review.rating)}</div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <strong>{review.name}</strong>
                                <span>{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
