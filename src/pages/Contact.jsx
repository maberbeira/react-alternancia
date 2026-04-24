import { useState } from 'react'

// Ejercicio 2: formulario de contacto con validación en tiempo real.
// Se gestionan estados para los datos, errores de validación y estado de envío.
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Mensajes de error mostrados al usuario.
  const [errors, setErrors] = useState({})
  // Controla qué campos han sido pulsados o visitados.
  const [touched, setTouched] = useState({})
  // Indica si el formulario se envió correctamente.
  const [submitted, setSubmitted] = useState(false)

  // Función encargada de validar las reglas de negocio de los campos.
  const validate = (data) => {
    const newErrors = {}

    if (!data.name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    }

    if (!data.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'El email no tiene un formato válido'
    }

    if (!data.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio'
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    return newErrors
  }

  // Actualiza los datos y recalcula errores al escribir.
  const handleChange = (event) => {
    const { name, value } = event.target

    const updatedFormData = {
      ...formData,
      [name]: value
    }

    setFormData(updatedFormData)
    setErrors(validate(updatedFormData))
  }

  // Marca un campo como visitado cuando pierde el foco (blur).
  const handleBlur = (event) => {
    const { name } = event.target

    setTouched({
      ...touched,
      [name]: true
    })

    setErrors(validate(formData))
  }

  // Valida completamente el formulario antes del envío final.
  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validate(formData)
    setErrors(validationErrors)

    // Al enviar, se consideran todos los campos como visitados.
    setTouched({
      name: true,
      email: true,
      message: true
    })

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)

      // Reinicio del formulario.
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      setErrors({})
      setTouched({})
    } else {
      setSubmitted(false)
    }
  }

  return (
    <section className="page">
      <h1>Contacto</h1>

      <p>
        Completa el formulario. Los errores se mostrarán en tiempo real sin recargar la página.
      </p>

      {/* Formulario que delega la validación a la lógica de JS */}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <p className="error-message">{errors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {touched.message && errors.message && (
            <p className="error-message">{errors.message}</p>
          )}
        </div>

        <button type="submit">Enviar</button>

        {submitted && (
          <p className="success-message">Formulario enviado correctamente</p>
        )}
      </form>
    </section>
  )
}

export default Contact