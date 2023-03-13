<script setup lang="ts">
import type { ITodoItem } from "../../typing/index";
import {useTodoStore} from '../../store/todo'

const store = useTodoStore();

const emit = defineEmits<{
  (e: "update", item: ITodoItem): void;
  (e: "remove", id: ITodoItem["id"]): void;
}>();

// const props = defineProps<{
//   list: ITodoItem[];
// }>();

const handleUpdate = (item: ITodoItem) => {
  emit("update", item);
};

const handleRemove = (id: ITodoItem["id"]) => {
  emit("remove", id);
};

const getItemClass = (done: ITodoItem["done"]) => {
  return `list-item-name ${done ? "list-item-name-done" : ""}`;
};
</script>

<template>
  <div v-if="store.list.length===0" class="list-empty">Add some stuff</div>
  <div class="list">
    <div v-for="item in store.list">
      <div class="list-item">
        <div :class="getItemClass(item.done)">{{ item.name }}</div>
        <div class="list-item-actions">
          <button
            class="list-item-actions-update-btn"
            @click="handleUpdate(item)"
          >
            Update
          </button>
          <button
            class="list-item-actions-remove-btn"
            @click="handleRemove(item.id)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin: 16px 0;
}

.list-empty {
  margin: 12px 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  padding: 8px 0;
}
.list-item-name-done {
  text-decoration:line-through;
}

.list-item-actions {
  display: flex;
  gap: 8px;
}

.list-item-actions button {
  height: 28px;
  width: 72px;
  border: 1px solid #efefef;
  cursor: pointer;
  border-radius: 6px;
}

.list-item-actions-remove-btn {
  background-color: #ff000090;
  color: #fff;
}

.list-item-actions-update-btn {
  background-color: #99cc6690;
  color: #fff;
}
</style>
