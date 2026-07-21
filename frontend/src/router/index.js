import { createRouter, createWebHistory } from "vue-router"

import Rooms from "@/components/Rooms/Rooms.vue"
import RoomDetails from "@/views/RoomDetails.vue"


const routes = [
    {
        path: "/rooms",
        name: "rooms",
        component: Rooms
    },

    {
        path: "/rooms/:id",
        name: "room-details",
        component: RoomDetails
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router