import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import RoomCategories from "@/components/Rooms/RoomCategories.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/rooms",
            component: RoomCategories
        }
    ]
})


export default router