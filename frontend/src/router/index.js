import { createRouter, createWebHistory } from "vue-router"

// =========================
// PUBLIC
// =========================
import Rooms from "@/components/Rooms/Rooms.vue"
import BookNow from "@/components/Rooms/BookNow.vue"
import RoomDetails from "@/views/RoomDetails.vue"
import MyAccount from "@/views/MyAccount.vue"

// =========================
// AUTH
// =========================
import Register from "@/views/auth/Register.vue"
import AdminLogin from "@/views/auth/AdminLogin.vue"
import StaffLogin from "@/views/auth/StaffLogin.vue"

// =========================
// ADMIN
// =========================
import AdminLayout from "@/layouts/AdminLayout.vue"
import Dashboard from "@/views/admin/Dashboard.vue"
import Bookings from "@/views/admin/Bookings.vue"
import Guests from "@/views/admin/Guests.vue"
import Payments from "@/views/admin/Payments.vue"
import AdminRooms from "@/views/admin/Rooms.vue"

// =========================
// STAFF
// =========================
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
  // HOME
  // =========================
  {
    path: "/",
    redirect: "/rooms"
  },


  // =========================
  // PUBLIC WEBSITE
  // =========================
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms
  },

  {
    path: "/rooms/:id",
    name: "RoomDetails",
    component: RoomDetails
  },

  {
    path: "/book-now",
    name: "BookNow",
    component: BookNow
  },

  {
    path: "/my-account",
    name: "MyAccount",
    component: MyAccount
  },

  {
    path: "/register",
    name: "Register",
    component: Register
  },


  // =========================
  // ADMIN LOGIN
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
        path: "",
        redirect: "/admin/dashboard"
      },

      {
        path: "dashboard",
        name: "AdminDashboard",
        component: Dashboard
      },

      {
        path: "bookings",
        name: "AdminBookings",
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
  // STAFF LOGIN
  // =========================
  {
    path: "/staff/login",
    name: "StaffLogin",
    component: StaffLogin
  },


  // =========================
  // STAFF PANEL
  // =========================
  {
    path: "/staff",
    component: StaffLayout,

    children: [

      {
        path: "",
        redirect: "/staff/dashboard"
      },

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
  },


  // =========================
  // 404
  // =========================
  {
    path: "/:pathMatch(.*)*",
    redirect: "/rooms"
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      behavior: "smooth"
    }
  }
})


export default router