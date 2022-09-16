import { createRouter, createWebHistory } from "vue-router";
import FreeComponent from "@/user/login/pages/free.component.vue";

import navigationSectionComponent from "@/user/subscription/pages/navigation-section.component.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: FreeComponent,
      redirect: "/login",
      props: true,
      children: [
        {
          path: "/login",
          name: "Login",
          component: () => import("../user/login/pages/login.component.vue")
        },
        {
          path: "/register",
          name: "Register",
          component: () => import("../user/login/pages/register.component.vue")
        }
      ]
    },
    {
      path: "/user",
      component: () => import("../user/subscription/pages/navigation-section.component.vue"),
      children: [
        {
          path: "/subscription",
          name: "Profile",
          component: () => import("../user/subscription/pages/subscription-section.component.vue")
        }
      ]
    }
  ],
});

export default router;
