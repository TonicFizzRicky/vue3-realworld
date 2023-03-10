<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);
</script>

<template>
  <div class="counter">
    <div class="counter-text">Count:{{ count }}</div>
   <div class="counter-actions">
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="reset">reset</button>
   </div>
  </div>
</template>

<style scoped>
.counter {
  width: 400px;
  margin: 20px auto;
}

.counter-text {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.counter-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.counter-actions button {
    text-align: center;
    width: 120px;
    height: 32px;
    font-size: 16px;
}
</style>
