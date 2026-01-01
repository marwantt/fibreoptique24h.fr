import React from 'react';
import './Gallery.css';
import gallerySplicing from '../assets/gallery_splicing_branded.png';
import galleryRack from '../assets/gallery_rack.png';
import galleryHome from '../assets/gallery_home.png';
import galleryOutdoor from '../assets/gallery_outdoor_branded.png';

const Gallery = () => {
    const photos = [
        { src: gallerySplicing, alt: "Soudure Fibre Optique", caption: "Soudure Haute Précision" },
        { src: galleryRack, alt: "Baie de Brassage", caption: "Organisation Baie Serveur" },
        { src: galleryHome, alt: "Installation à Domicile", caption: "Installation Rapide à Domicile" },
        { src: galleryOutdoor, alt: "Intervention Extérieure", caption: "Maintenance Réseau Urbain" }
    ];

    return (
        <section className="section gallery-section">
            <div className="container">
                <h2 className="text-center mb-lg">Nos Réalisations</h2>
                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <div key={index} className="gallery-item">
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{photo.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
