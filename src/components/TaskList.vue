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
const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/task/${id}`);
        tasks.value = response.data.newData;
        console.log(response.data);
    } catch (error) {
        console.error("Erreur lors de la suppression de la tâche", error);
    }
};

onMounted(() => {
    fetchTasks();
});
</script>

<template>
    <h1>Liste des tâches</h1>

    <div class="tache">
        <div v-for="task in tasks" :key="task._id" class="card">
            <div>
                <strong>{{ task.name }}:</strong> {{ task.description }}
                {{ task._id }}
                <button v-on:click="deleteTask(task._id)">delete</button>
            </div>
        </div>
    </div>
    <router-link to="/">Ajouter une nouvelle tâche</router-link>
</template>

<style scoped>
.tache {
    columns: 3;
}

.card {
}
</style>
