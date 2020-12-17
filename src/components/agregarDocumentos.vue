<template>
  <div id="agregarDocumento">
    <h3>Agregar Documento</h3>
    <label for="id_doc">Id Documento</label>
    <input v-model="id_doc" id="id_doc" />
    <label for="nombre">Nombre</label>
    <input v-model="nombre" id="nombre" />
    <label for="id_dependencia">Id Dependencia</label>
    <input v-model="id_dependencia" id="id_dependencia" />
    <label for="prioridad">Prioridad</label>
    <input v-model="prioridad" id="prioridad" />
    <label for="fecha_venc">Fecha de vencimiento</label>
    <input v-model="fecha_venc" id="fecha_venc" type="date"/>
    <button v-on:click="agregarDocumento">Agregar Documento</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "agregarDocumentos",
  data: function() {
    return {
      id_doc: "",
      nombre: "",
      id_dependencia: "",
      prioridad: "",
      fecha_venc: "",
    };
  },
  methods: {
    agregarDocumento: function() {
      var datosJSON = {
        id_documento: this.id_doc,
        nombre: this.nombre,
        id_dependencia: this.id_dependencia,
        prioridad: this.prioridad,
        fecha_venc: this.fecha_venc
      };
      axios
        .post("https://backendsprint2.herokuapp.com/documentos/nuevo/", datosJSON)
        .then(respuesta => {
          alert(respuesta.data.mensaje);
        })
        .catch(error => {
          alert("error en el servidor con codigo "+ error.response.status);
        });
    }
  },
};
</script>

<style scoped>
</style>