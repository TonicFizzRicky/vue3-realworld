<script setup lang="ts">
import type { ITodoItem } from "../../typing/index";
import { useTodoStore } from "../../store/todo";

const store = useTodoStore();

const emit = defineEmits<{
  (e: "update", item: ITodoItem): void;
  (e: "remove", id: ITodoItem["id"]): void;
}>();

const handleUpdate = (item: ITodoItem) => {
  emit("update", item);
};

const handleRemove = (id: ITodoItem["id"]) => {
  emit("remove", id);
};
</script>

<template>
  <el-empty v-if="store.list.length === 0" description="Add some stuff" />
  <div class="list">
    <div v-for="item in store.list">
      <el-card class="list-card">
        <div class="list-item">
          <div
            :class="{
              'list-item-name': true,
              'list-item-name-done': item.done,
            }"
          >
            {{ item.name }}
          </div>
          <div class="list-item-actions">
            <el-button type="primary" @click="handleUpdate(item)"
              >Update</el-button
            >
            <el-button type="danger" @click="handleRemove(item.id)"
              >Remove</el-button
            >
          </div>
        </div>
      </el-card>
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

.list-card {
  margin-bottom: 16px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}
.list-item-name-done {
  text-decoration: line-through;
}

.list-item-actions {
  display: flex;
  gap: 8px;
}
</style>
