import VueRouter from "vue-router";
import listarDocumentos from "./components/listarDocumentos";
import agregarDocumentos from "./components/agregarDocumentos";

const router = new VueRouter({
    //mode: "history",
    routes: [
        {
            name: "listar",
            path: "/listar",
            component: listarDocumentos
        },
        {
            name: "agregar",
            path: "/agregar",
            component: agregarDocumentos
        },
    ]
})

export default router;