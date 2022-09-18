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
          component: () => import("../user/login/pages/register.component.vue"),
          children: [
            {
              path: "/register",
              name: "FirstStep",
              props: true,
              component: () => import("../user/register/pages/first-step.component.vue")
            },
            {
              path: "/register/secondstep",
              name: "SecondStep",
              props: true,
              component: () => import("../user/register/pages/second-step.component.vue")
            },
            {
              path: "/register/laststep",
              name: "LastStep",
              props: true,
              component: () => import("../user/register/pages/last-step.component.vue")
            }
          ]
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
    },
    {
      path: "/mycars",
      component: () => import("../user/mycars/pages/mycars.component.vue")
    }
  ],
});

export default router;
