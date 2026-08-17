import { createRouter, createWebHistory } from "vue-router"

// Public
import Rooms from "@/components/Rooms/Rooms.vue"
import RoomDetails from "@/views/RoomDetails.vue"

// Admin
import AdminLayout from "@/layouts/AdminLayout.vue"
import Dashboard from "@/views/admin/Dashboard.vue"
import Bookings from "@/views/admin/Bookings.vue"
import Guests from "@/views/admin/Guests.vue"
import Payments from "@/views/admin/Payments.vue"
import AdminRooms from "@/views/admin/Rooms.vue"

// Auth
import Register from "@/views/auth/Register.vue"
import AdminLogin from "@/views/auth/AdminLogin.vue"
import StaffLogin from "@/views/auth/StaffLogin.vue"

// Staff
import StaffLayout from "@/layouts/StaffLayout.vue"
import StaffDashboard from "@/views/staff/Dashboard.vue"
import CheckIns from "@/views/staff/CheckIns.vue"
import CheckOuts from "@/views/staff/CheckOuts.vue"
import StaffGuests from "@/views/staff/Guests.vue"
import StaffRooms from "@/views/staff/Rooms.vue"
import StaffPayments from "@/views/staff/Payments.vue"
import StaffBookings from "@/views/staff/Bookings.vue"
const routes = [

  // =========================
  // PUBLIC WEBSITE
  // =========================

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

  {
    path: "/register",
    name: "Register",
    component: Register
  },


  // =========================
  // ADMIN AUTH
  // =========================

  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin
  },


  // =========================
  // ADMIN PANEL
  // =========================

  {
    path: "/admin",
    component: AdminLayout,

    children: [

      {
        path: "dashboard",
        name: "AdminDashboard",
        component: Dashboard
      },

      {
        path: "bookings",
        name: "Bookings",
        component: Bookings
      },

      {
        path: "guests",
        name: "AdminGuests",
        component: Guests
      },

      {
        path: "payments",
        name: "AdminPayments",
        component: Payments
      },

      {
        path: "rooms",
        name: "AdminRooms",
        component: AdminRooms
      }

    ]
  },


  // =========================
  // STAFF AUTH
  // =========================

  {
    path: "/staff/login",
    name: "StaffLogin",
    component: StaffLogin
  },


  // =========================
  // STAFF / RECEPTION PANEL
  // =========================

  {
    path: "/staff",
    component: StaffLayout,

    children: [

      {
        path: "dashboard",
        name: "StaffDashboard",
        component: StaffDashboard
      },

      {
        path: "check-ins",
        name: "StaffCheckIns",
        component: CheckIns
      },

      {
        path: "check-outs",
        name: "StaffCheckOuts",
        component: CheckOuts
      },

      {
        path: "guests",
        name: "StaffGuests",
        component: StaffGuests
      },

      {
        path: "rooms",
        name: "StaffRooms",
        component: StaffRooms
      },
      {
  path: "bookings",
  name: "StaffBookings",
  component: StaffBookings
},

      {
        path: "payments",
        name: "StaffPayments",
        component: StaffPayments
      }

    ]
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router