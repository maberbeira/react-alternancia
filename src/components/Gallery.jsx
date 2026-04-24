import { useState } from 'react'

import mongrels from '../assets/images/Mongrels.jpg'
import evergreen from '../assets/images/Evergreen.jpg'
import flames from '../assets/images/Feed the Flames.jpg'
import future from '../assets/images/Future Tense.jpg'
import graveracer from '../assets/images/Graveracer.jpg'
import green from '../assets/images/Green Light.jpg'
import knots from '../assets/images/Knots.jpg'
import strays from '../assets/images/Strays.jpg'

// Ejercicio 3: galería interactiva con imagen principal y miniaturas.
function Gallery() {
  const images = [
    { id: 1, src: mongrels, alt: 'Mongrels' },
    { id: 2, src: evergreen, alt: 'Evergreen' },
    { id: 3, src: flames, alt: 'Feed the Flames' },
    { id: 4, src: future, alt: 'Future Tense' },
    { id: 5, src: graveracer, alt: 'Graveracer' },
    { id: 6, src: green, alt: 'Green Light' },
    { id: 8, src: knots, alt: 'Knots' },
    { id: 9, src: strays, alt: 'Strays' }
  ]

  // Estado que guarda la imagen seleccionada por el usuario.
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <section className="gallery-section">
      <h2>Galería musical interactiva</h2>

      <p>
        Selecciona una portada para verla destacada como imagen principal.
      </p>

      <img
        className="main-image"
        src={selectedImage.src}
        alt={selectedImage.alt}
      />

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