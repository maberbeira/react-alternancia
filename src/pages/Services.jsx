import Gallery from '../components/Gallery'
import Blog from '../components/Blog'

/**
 * Página de servicios que integra sub-componentes interactivos.
 * Contiene la galería musical y el sistema de blog dinámico.
 */
function Services() {
  return (
    <section className="page">
      <h1>Servicios</h1>

      <p>
        En esta sección se incorpora una galería interactiva y un sistema de publicaciones dinámicas.
      </p>

      <Gallery />
      <Blog />
    </section>
  )
}

export default Services