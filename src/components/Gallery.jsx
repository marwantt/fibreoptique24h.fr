import React from 'react';
import './Gallery.css';

const Gallery = () => {
    // Placeholders for real project photos
    const photos = [1, 2, 3, 4, 5, 6];

    return (
        <section className="section gallery-section">
            <div className="container">
                <h2 className="text-center mb-lg">Nos Réalisations</h2>
                <div className="gallery-grid">
                    {photos.map((_, index) => (
                        <div key={index} className="gallery-item">
                            <div className="gallery-placeholder">
                                <span>RÉALISATION {index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-muted mt-md">Images non contractuelles (Placeholders)</p>
            </div>
        </section>
    );
};

export default Gallery;
