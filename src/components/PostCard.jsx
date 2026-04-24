// Componente visual para mostrar una publicación del blog.
// Recibe los datos del post y las funciones para manipularlo (edit, delete, toggle).
function PostCard({ post, onDelete, onEdit, onToggleFeatured }) {
  return (
    // Se aplica una clase CSS adicional si el post está marcado como destacado.
    <article className={post.featured ? 'post-card featured-post' : 'post-card'}>
      {post.featured && <span className="featured-label">Destacado</span>}

      <h3>{post.title}</h3>
      <p>{post.description}</p>

      <div className="post-actions">
        {/* Llama a la función de edición en el componente padre */}
        <button onClick={() => onEdit(post)}>
          Editar
        </button>

        {/* Llama a la función para marcar/desmarcar como destacado */}
        <button onClick={() => onToggleFeatured(post.id)}>
          {post.featured ? 'Quitar destacado' : 'Destacar'}
        </button>

        {/* Llama a la función de eliminación */}
        <button className="delete-button" onClick={() => onDelete(post.id)}>
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default PostCard