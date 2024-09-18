<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const tasks = ref([]);

const fetchTasks = async () => {
    try {
        const response = await axios.get("http://localhost:3000/task");
        tasks.value = response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des tâches :", error);
    }
};

onMounted(() => {
    fetchTasks();
});
</script>

<template>
    <h1>Liste des tâches</h1>

    <ul>
        <li v-for="task in tasks" :key="task._id">
            <strong>{{ task.name }}:</strong> {{ task.description }}
        </li>
    </ul>
    <router-link to="/">Ajouter une nouvelle tâche</router-link>
</template>

<style scoped></style>
