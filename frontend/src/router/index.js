import { createRouter, createWebHistory } from "vue-router"

import Rooms from "@/components/Rooms/Rooms.vue"
import RoomDetails from "@/views/RoomDetails.vue"

import AdminLayout from "@/layouts/AdminLayout.vue"
import Dashboard from "@/views/admin/Dashboard.vue"
import Bookings from '@/views/admin/Bookings.vue'

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
    },

    // Admin routes
    {
        path: "/admin",
        component: AdminLayout,
        children: [
            {
                path: "dashboard",
                name: "AdminDashboard",
                component: Dashboard
            }
        ]
    },
    {
  path: '/admin/bookings',
  name: 'Bookings',
  component: Bookings
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router