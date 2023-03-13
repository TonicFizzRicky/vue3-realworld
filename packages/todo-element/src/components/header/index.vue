<script setup lang="ts">
import { ref } from "vue";

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
    <el-input
      v-model="text"
      placeholder="Please input what you want to do..."
    />
    <el-button type="primary" @click="handleSubmit">Submit</el-button>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
</style>
