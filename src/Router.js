import { createRouter, createWebHistory } from "vue-router";
//importar paginas
import HomeSeries from './components/HomeSeries.vue'
import CrearPersonaje from './components/CrearPersonaje.vue'
import SerieSeries from './components/SerieSeries.vue'
import ModificarPersonaje from './components/ModificarPersonaje.vue'
//crear array rutas
const myRoutes = [
    {
        path:"/", component:HomeSeries
    },
    {
        path:"/crearpersonaje", component:CrearPersonaje
    },
    {
        path:"/serie/:serie?", component:SerieSeries
    },
    {
        path:"/modificarpersonaje", component:ModificarPersonaje
    }
]
//crear constante para el historial
const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router