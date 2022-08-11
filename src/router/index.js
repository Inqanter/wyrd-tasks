import { createRouter, createWebHistory } from "vue-router";
import TasksView from "../views/TasksView.vue";
import TaskView from "../views/TaskView.vue";
import NotFound from "../components/ui-kit/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tasks",
      component: TasksView,
      children: [
        {
          path: "task/:id",
          name: "task",
          component: TaskView
        }
      ]
    },
    {
      path: "/:notFound(.*)",
      name: "notFound",
      component: NotFound
    }
  ]
});

export default router;
