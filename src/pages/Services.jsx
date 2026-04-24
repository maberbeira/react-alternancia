import Gallery from '../components/Gallery'
import Blog from '../components/Blog'

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