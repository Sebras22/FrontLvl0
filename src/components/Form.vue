<script setup>
import { ref } from "vue";

const product = ref(null);

// // POST request using fetch with async/await
// const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name: "TASKTEST", description: "qzdhqzd" }),
// };
// const response = await fetch("http://localhost:3000/new", requestOptions);
// const data = await response.json();
// console.log(data);
// product.value = data;

// const count = ref(0);
</script>
<template>
    <form>
        <p>Add item</p>
        <p>Item name: <input type="text" required /></p>
        <p>How many: <input type="number" /></p>
        <button type="submit">Add item</button>
    </form>
</template>
