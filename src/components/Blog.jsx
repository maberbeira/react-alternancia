import { useState } from 'react'
import PostCard from './PostCard.jsx'

// Ejercicio 4: sistema de publicaciones dinámicas.
function Blog() {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })

  const [posts, setPosts] = useState([])
  const [editingId, setEditingId] = useState(null)

  // Actualiza el estado del formulario del blog.
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Crea una publicación nueva o actualiza una existente.
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Debes completar título y descripción')
      return
    }

    if (editingId) {
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
      const newPost = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        featured: false
      }

      setPosts([newPost, ...posts])
    }

    setFormData({
      title: '',
      description: ''
    })
  }

  // Carga los datos de una publicación en el formulario para editarla.
  const editPost = (post) => {
    setFormData({
      title: post.title,
      description: post.description
    })

    setEditingId(post.id)
  }

  // Elimina una publicación usando su identificador.
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

  // Cambia el estado destacado de una publicación.
  const toggleFeatured = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, featured: !post.featured }
        : post
    )

    setPosts(updatedPosts)
  }

  // Cancela la edición actual.
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