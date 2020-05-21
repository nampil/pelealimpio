<template>
  <div id="contacto" class="contacto">
    <div class="overlay"></div>
    <div class="container">
      <div class="contacto-content">
        <div class="contacto-content-left">
          <h1 class="titulo-seccion">
            Contáctenos
          </h1>
          <div class="contato-info">
            <h3 class="contacto-info-title">Visítanos</h3>
            <ul class="contacto-info-list">
              <li class="contacto-info-list-item">
                <i class="fas fa-map-marker-alt"></i>
                <strong>Dirección:</strong> C.C.P. Dinastía, piso 3,
                oficina 53. Naguanagua, Carabobo. Venezuela.
              </li>
              <li class="contacto-info-list-item">
                <i class="fas fa-phone"></i>
                <strong>Teléfono:</strong> +58 (241) 867-9018
              </li>
              <li class="contacto-info-list-item">
                <i class="far fa-envelope"></i>
                <strong>Email:</strong> info@pelealimpio.com
              </li>
            </ul>
          </div>
          <div class="contato-social">
            <h3 class="contacto-social-title">
              SÍGUENOS EN NUESTRAS REDES
            </h3>
            <ul class="contacto-social-list">
              <li class="contacto-social-list-item">
                <a
                  class="contacto-social-list-link"
                  href="https://www.facebook.com/Pelea-Limpio-548493425336083/"
                  target="blank"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li class="contacto-social-list-item">
                <a
                  class="contacto-social-list-link"
                  href="https://twitter.com/pelealimpio"
                  target="blank"
                  ><i class="fab fa-twitter"></i
                ></a>
              </li>
              <li class="contacto-social-list-item">
                <a
                  class="contacto-social-list-link"
                  href="https://www.instagram.com/pelealimpio/"
                  target="blank"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li class="contacto-social-list-item">
                <a
                  class="contacto-social-list-link"
                  href="https://www.youtube.com/channel/UCo3uSDjFzGJFyPg7mKmXulg"
                  target="blank"
                  ><i class="fab fa-youtube"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="contacto-content-right">
          <div class="contacto-form">
            <h3 class="contacto-form-title">
              Escríbenos
            </h3>
            <form
              ref="contactForm"
              class="contact-form"
              @submit.prevent="handleContacForm"
            >
              <div class="input-group">
                <label class="form-label" for="name"
                  >Nombre
                  <span class="requerido">(requerido)</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  v-model="contact.nombre"
                />
                <p class="error-text">
                  <small>{{ errorNombre }}</small>
                </p>
              </div>
              <div class="input-group">
                <label class="form-label" for="email"
                  >Email
                  <span class="requerido">(requerido)</span></label
                >
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  v-model="contact.email"
                />
                <p class="error-text">
                  <small>{{ errorEmail }}</small>
                </p>
              </div>
              <div class="input-group">
                <label class="form-label" for="motivo">Motivo</label>
                <select
                  class="form-control"
                  name="motivo"
                  v-model="contact.motivo"
                >
                  <option value="Información">Información</option>
                  <option value="Testimonio">Testimonio</option>
                  <option value="Comentario">Comentario</option>
                  <option value="Invitación">Invitación</option>
                </select>
                <p class="error-text">
                  <small>{{ errorMotivo }}</small>
                </p>
              </div>
              <div class="input-group">
                <label class="form-label" for="mensaje"
                  >Mensaje</label
                >
                <textarea
                  class="form-control"
                  name="mensaje"
                  v-model="contact.mensaje"
                >
                </textarea>
                <p class="error-text">
                  <small>{{ errorMensaje }}</small>
                </p>
              </div>
              <button
                class="form-btn"
                @click.prevent="handleContacForm"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contacto',
  data() {
    return {
      errorNombre: '',
      errorEmail: '',
      errorMotivo: '',
      errorMensaje: '',
      contact: {
        nombre: '',
        email: '',
        motivo: '',
        mensaje: '',
      },
    }
  },
  methods: {
    handleContacForm() {},
  },
}
</script>
<style lang="scss" scoped></style>
