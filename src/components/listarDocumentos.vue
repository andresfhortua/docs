<template>
  <table id="t_archivos">
    <tr>
      <td>ID</td>
      <td>NOMBRE</td>
      <td>ID DEPENDENCIA</td>
      <td>PRIORIDAD</td>
      <td>FECHA DE VENCIMIENTO</td>
    </tr>
    <tr v-for="archivo in documentos" v-bind:key="archivo.id">
      <td>{{ archivo.id_documento }}</td>
      <td>{{ archivo.nombre }}</td>
      <td>{{ archivo.id_dependencia }}</td>
      <td>{{ archivo.prioridad }}</td>
      <td>{{ archivo.fecha_venc }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "listarDocumentos",
  data: function() {
    return {
      documentos: []
    };
  },
  beforeCreate: function() {
    axios
      .get("https://backendsprint2.herokuapp.com/documentos/")
      .then(respuesta => {
        this.documentos = respuesta.data;
        
      })
      .catch(error => {
        console.log(error);
        alert("Error en la peticion con codigo " + error.response.status);
      });
  }
};
</script>

<style >
#t_archivos {
  border: black 1px solid;
}
</style>