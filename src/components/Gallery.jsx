import { useState } from 'react'

import mongrels from '../assets/images/Mongrels.jpg'
// ... (otros archivos de imagen)

// Ejercicio 3: galería interactiva con imagen principal y miniaturas.
function Gallery() {
  const images = [
    { id: 1, src: mongrels, alt: 'Mongrels' },
// ...
  ]

  // Estado para controlar qué imagen se muestra a tamaño completo.
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <section className="gallery-section">
      <h2>Galería musical interactiva</h2>

      <p>
        Selecciona una portada para verla destacada como imagen principal.
      </p>

      {/* Imagen destacada seleccionada por el usuario */}
      <img
        className="main-image"
        src={selectedImage.src}
        alt={selectedImage.alt}
      />

      {/* Lista de miniaturas clickeables para cambiar la imagen actual */}
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