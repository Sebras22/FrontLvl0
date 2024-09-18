// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import TaskForm from "./components/TaskForm.vue"; // Page de formulaire
import TaskList from "./components/TaskList.vue"; // Nouvelle page de liste de tâches

const routes = [
    {
        path: "/",
        name: "TaskForm",
        component: TaskForm,
    },
    {
        path: "/tasks",
        name: "TaskList",
        component: TaskList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
