import { createRouter, createWebHistory } from "vue-router"

import Rooms from "@/views/Rooms.vue"
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

export default createRouter({
    history: createWebHistory(),
    routes
})

import Rooms from "@/views/Rooms.vue"
import RoomDetails from "@/views/RoomDetails.vue"

const routes = [

{
    path:"/",
    component:Rooms
},

{
    path:"/room/:id",
    component:RoomDetails
}

]