<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const description = ref("");

const submitTask = async () => {
    try {
        const response = await axios.post("http://localhost:3000/new", {
            name: name.value,
            description: description.value,
        });
        console.log(response.data);
        name.value = "";
        description.value = "";
    } catch (error) {
        console.error("Erreur lors de l'envoi de la tâche:", error);
    }
};
</script>

<template>
    <h1>Ajouter une nouvelle tâche</h1>

    <form @submit.prevent="submitTask">
        <div>
            <label for="name">Nom de la tâche:</label>
            <input id="name" v-model="name" type="text" required />
        </div>

        <div>
            <label for="description">Description de la tâche:</label>
            <input
                id="description"
                v-model="description"
                type="text"
                required
            />
        </div>

        <button type="submit">Ajouter la tâche</button>
    </form>

    <router-link to="/tasks">Voir les tâches</router-link>
</template>

<style scoped></style>
