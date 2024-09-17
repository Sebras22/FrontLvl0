<script setup>
import task from "./task.vue";
const myObject = {
    title: "How to do lists in Vue",
    author: "Jane Doe",
    publishedAt: "2016-04-10",
};
</script>

<template>
    <h1>Todolist</h1>
    <task name="haha" description="qzjdhlqubde"></task>

    <li v-for="value in myObject">
        {{ value }}
    </li>
</template>

<style scoped></style>
