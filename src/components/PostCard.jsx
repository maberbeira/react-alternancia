// Componente que representa una publicación individual del blog.
function PostCard({ post, onDelete, onEdit, onToggleFeatured }) {
  return (
    <article className={post.featured ? 'post-card featured-post' : 'post-card'}>
      {post.featured && <span className="featured-label">Destacado</span>}

      <h3>{post.title}</h3>
      <p>{post.description}</p>

      <div className="post-actions">
        <button onClick={() => onEdit(post)}>
          Editar
        </button>

        <button onClick={() => onToggleFeatured(post.id)}>
          {post.featured ? 'Quitar destacado' : 'Destacar'}
        </button>

        <button className="delete-button" onClick={() => onDelete(post.id)}>
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default PostCard