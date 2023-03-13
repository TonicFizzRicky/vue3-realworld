<script setup lang="ts">
import { ref } from 'vue';
import type {Directive} from 'vue'
const color = ref("red");
const off = ref(true);

// 局部指令
const vHidden:Directive = {
    mounted:(element:HTMLElement,binding) => {
        console.log("binding.value",binding.value)
        if (binding.value) {
            element.style.display = "none";
        } else {
            element.style.display = "unset"
        }
    },
    updated:(element:HTMLElement,binding) => {
        console.log("binding.value updated",binding.value)
        if (binding.value) {
            element.style.display = "none";
        } else {
            element.style.display = "unset"
        }
    }
}

const toggle = () => {
    off.value = !off.value
}
</script>

<template>
    <input type="text" v-focus>
    <p v-color="color">Color</p>
    <p v-hidden="off">Text</p>
    <button @click="toggle">{{ off ? "显示" : "隐藏" }}</button>
</template>