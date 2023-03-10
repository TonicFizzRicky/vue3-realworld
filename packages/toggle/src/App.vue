<script setup lang="ts">
import { ref, computed } from "vue";

const onState = ref(false); // 开关状态

// 根据开关状态挂载对应的 class
const toggleClass = computed(() =>
    onState.value ? "toggle-on" : "toggle-off"
);

// 切换开关状态
const handleToggle = () => {
    onState.value = !onState.value;
};
</script>

<template>
    <div :class="toggleClass" id="toggle">
        <button @click="handleToggle">{{ onState ? "On" : "Off" }}</button>
    </div>
</template>

<style scoped>
#toggle {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}

#toggle button {
    width: 200px;
    height: 36px;
    font-size: 16px;
}

.toggle-off {
    background-color: #000;
}
</style>
