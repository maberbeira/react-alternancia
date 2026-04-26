import { useState } from 'react'

// IMPORTANTE: tus imágenes locales
import mongrels from '../assets/images/Mongrels.jpg'
import evergreen from '../assets/images/Evergreen.jpg'
import flames from '../assets/images/Feed the Flames.jpg'
import future from '../assets/images/Future Tense.jpg'
import graveracer from '../assets/images/Graveracer.jpg'
import green from '../assets/images/Green Light.jpg'
import knots from '../assets/images/Knots.jpg'
import strays from '../assets/images/Strays.jpg'

// Componente de galería interactiva
function Gallery() {

  // Array de imágenes
  const images = [
    { id: 1, src: mongrels, alt: 'Mongrels' },
    { id: 2, src: evergreen, alt: 'Evergreen' },
    { id: 3, src: flames, alt: 'Feed the Flames' },
    { id: 4, src: future, alt: 'Future Tense' },
    { id: 5, src: graveracer, alt: 'Graveracer' },
    { id: 6, src: green, alt: 'Green Light' },
    { id: 7, src: knots, alt: 'Knots' },
    { id: 8, src: strays, alt: 'Strays' }
  ]

  // Estado: imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <section className="gallery-section">
      <h2>Galería musical</h2>

      <p>
        Selecciona una portada para verla como imagen principal.
      </p>

      {/* Imagen principal */}
      <img
        className="main-image"
        src={selectedImage.src}
        alt={selectedImage.alt}
      />

      {/* Miniaturas */}
      <div className="thumbnail-list">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className={
              selectedImage.id === image.id
                ? 'thumbnail selected-thumbnail'
                : 'thumbnail'
            }
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery