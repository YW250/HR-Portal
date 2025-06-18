import React, { useState } from 'react';
import galleryImages from '../data/galleryData';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', padding: '1rem', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Gallery</h2>

      {galleryImages.length === 0 ? (
        <p>No images uploaded yet. Update <code>galleryData.js</code> to add images.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.title}
              title={img.title}
              onClick={() => setSelectedImage(img)}
              style={{ width: '200px', height: '150px', objectFit: 'cover', cursor: 'pointer', borderRadius: '6px' }}
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            cursor: 'pointer'
          }}
        >
          <img src={selectedImage.src} alt={selectedImage.title} style={{ maxWidth: '90%', maxHeight: '80vh', borderRadius: '8px' }} />
          <h4 style={{ color: 'white', marginTop: '1rem' }}>{selectedImage.title}</h4>
        </div>
      )}
    </div>
  );
}

export default Gallery;
