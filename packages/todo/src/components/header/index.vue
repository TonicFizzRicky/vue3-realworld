<script setup lang="ts">
import { ref } from "vue";
import type { ITodoItem } from "../../typing";
const text = ref("");

const emit = defineEmits<{
  (e: "submit", name: string): void;
}>();

const handleSubmit = () => {
  if (!text.value.trim().length) return;
  emit("submit", text.value);
  text.value = "";
};
</script>

<template>
  <div class="header">
    <input
      type="text"
      class="text"
      v-model="text"
      placeholder="Please input what you want to do..."
    />
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
}

.header input {
  width: 75%;
  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 0 4px;
}

.header button {
  height: 28px;
  width: 60px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background-color: #0099dd80;
  color: #fff;
  cursor: pointer;
}
</style>
