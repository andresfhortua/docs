<template>
  <div>
    <h1>Sistema de gestión de archivos</h1>
    <nav>
      <button v-on:click="verDocumentos">Ver documentos</button>
      <button v-on:click="agDocs">Agregar documentos</button>
      <router-view></router-view>
    </nav>
    
  </div>
</template>

<script>
import listarDocumentos from "./components/listarDocumentos";
import agregarDocumentos from "./components/agregarDocumentos";
export default {
  name: "App",
  components: {listarDocumentos, agregarDocumentos},
  methods: {
    verDocumentos: function () {
        this.$router.push({ name: "listar" });
    },
    agDocs: function(){
        this.$router.push({ name: "agregar" });
    }
  },  
}
</script>
  
<style></style>
