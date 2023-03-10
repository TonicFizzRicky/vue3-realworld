<script setup lang="ts">
import { ref, defineProps } from "vue";
import type { IModalProps } from "./typing";
const props = defineProps<{
  open: boolean;
  title: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const handleClose = () => {
    emit("close")
}

</script>

<template>
  <div class="modal-wrap"  v-show="props.open">
    <div class="modal">
    <div class="modal-header">
      <div class="modal-header-title">{{ props.title }}</div>
      <div class="modal-header-close" @click="handleClose">×</div>
    </div>
    <div class="modal-content"><slot /></div>
  </div>
  </div>
</template>

<style>
.modal-wrap {
    position: fixed;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background-color: #00000060;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  border: 1px solid #d9d9d9;
  width: 600px;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 6px;
  background-color: #fff;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 12px 12px;
}
.modal-header-close {
  cursor: pointer;
  font-size: 18px;
}
.modal-content {
  margin: 12px 12px;
}
</style>
