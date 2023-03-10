<script setup lang="ts">
import { ref, onUnmounted } from "vue";

const count = ref(0);
const paused = ref(false); // 判断是否暂停

const handleIncrement = () => {
  if (paused.value) return;
  count.value++;
};

const handleTogglePause = () => {
  paused.value = !paused.value;
};

const handleReset = () => {
  count.value = 0;
};

const timer = setInterval(() => {
  handleIncrement();
}, 1000);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="interval">
    <div class="interval-count">{{ count }}</div>
    <div class="interval-actions">
      <button @click="handleReset">reset</button>
      <button @click="handleTogglePause">
        {{ paused ? "Start" : "Pause" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.interval {
  width: 200px;
  margin: 20px auto;
  text-align: center;
}

.interval-count {
  font-size: 28px;
  line-height: 1.6em;
  font-weight: bold;
}

.interval-actions {
  margin: 24px 0;
  display: flex;
  justify-content: center;
  gap: 24px;
}
.interval-actions button {
  width: 72px;
  height: 40px;
  font-size: 18px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #efefef;
  cursor: pointer;
}
</style>
