import { useState } from 'react'
import PostCard from './PostCard.jsx'

// Ejercicio 4: sistema de publicaciones dinámicas (CRUD).
// Permite gestionar una lista de posts en el estado local del componente.
function Blog() {
  // Estado para capturar los datos actuales del formulario de entrada.
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })

  // Lista de publicaciones almacenadas.
  const [posts, setPosts] = useState([])
  // ID de la publicación que se está editando en este momento.
  const [editingId, setEditingId] = useState(null)

  // Sincroniza los cambios de los inputs con el estado del formulario.
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Procesa el envío del formulario para crear o actualizar un post.
  const handleSubmit = (event) => {
    event.preventDefault()

    // Validación para asegurar que hay contenido antes de guardar.
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Debes completar título y descripción')
      return
    }

    if (editingId) {
      // Actualización de post existente.
      const updatedPosts = posts.map((post) =>
        post.id === editingId
          ? {
              ...post,
              title: formData.title,
              description: formData.description
            }
          : post
      )

      setPosts(updatedPosts)
      setEditingId(null)
    } else {
      // Creación de post nuevo con ID único.
      const newPost = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        featured: false
      }

      setPosts([newPost, ...posts])
    }

    // Limpieza de campos tras la operación.
    setFormData({
      title: '',
      description: ''
    })
  }

  // Carga los datos de un post en los campos de edición.
  const editPost = (post) => {
    setFormData({
      title: post.title,
      description: post.description
    })

    setEditingId(post.id)
  }

  // Elimina un post de la lista basándose en su ID.
  const deletePost = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id)
    setPosts(filteredPosts)

    if (editingId === id) {
      setEditingId(null)
      setFormData({
        title: '',
        description: ''
      })
    }
  }

  // Cambia el estado 'destacado' de una publicación específica.
  const toggleFeatured = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, featured: !post.featured }
        : post
    )

    setPosts(updatedPosts)
  }

  // Cancela la edición actual sin guardar cambios.
  const cancelEdit = () => {
    setEditingId(null)
    setFormData({
      title: '',
      description: ''
    })
  }

  return (
    <section className="blog-section">
      <h2>Blog dinámico</h2>

      <p>
        Crea publicaciones introduciendo un título y una descripción.
        También puedes editar, eliminar o destacar cada publicación.
      </p>

      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título del post"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción del post"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <div className="blog-buttons">
          <button type="submit">
            {editingId ? 'Guardar cambios' : 'Crear post'}
          </button>

          {editingId && (
            <button type="button" className="secondary-button" onClick={cancelEdit}>
              Cancelar edición
            </button>
          )}
        </div>
      </form>

      <div className="posts-container">
        {posts.length === 0 ? (
          <p>No hay publicaciones todavía.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={deletePost}
              onEdit={editPost}
              onToggleFeatured={toggleFeatured}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default Blog