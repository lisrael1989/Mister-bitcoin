import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ContactIndex from "../views/ContactIndex.vue"
import ContactDetails from "../views/ContactDetails.vue"
import ContactEdit from "../views/ContactEdit.vue"

const routerOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactIndex,
    },
    {
      path: "/contact/:contactId",
      name: "ContactDetails",
      component: ContactDetails,
    },
    {
      path: "/contact/edit/:contactId?",
      name: "contactEdit",
      component: ContactEdit,
    },
    {
      path: "/Statistics",
      name: "Statistics",
      component: () => import("../views/Statistics.vue"),
    },
  ],
}

const router = createRouter(routerOptions)

export default router
