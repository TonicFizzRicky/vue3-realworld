<script setup lang="ts">
import Header from "./components/header/index.vue";
import List from "./components/list/index.vue";
import { ref } from "vue";
import type { ITodoItem } from "./typing/index";
import { useTodoStore } from "../src/store/todo";

const store = useTodoStore();

const modalOpen = ref(false);
const modalTitle = ref("Detail");
const currentName = ref("");
const currentDone = ref(false);
const currentId = ref(0);

// 新增
const handleAppend = (name: ITodoItem["name"]) => {
  store.addTodo(name);
};

// 删除
const handleRemove = (id: ITodoItem["id"]) => {
  store.removeTodo(id);
};

// 修改
const handleUpdate = (item: ITodoItem) => {
  const { name, done, id } = item;
  currentName.value = name;
  currentDone.value = done;
  currentId.value = id;
  handleOpenModal();
};

// 打开弹窗
const handleOpenModal = () => {
  modalOpen.value = true;
};

// 关闭弹窗
const handleCloseModal = () => {
  modalOpen.value = false;
};

// 更新
const handleUpdateItem = () => {
  if (!currentName.value.trim().length) return;

  store.updateTodo({
    name: currentName.value,
    id: currentId.value,
    done: currentDone.value,
  });

  // 更新完毕后，关闭弹窗
  handleCloseModal();
};
</script>

<template>
  <div class="todo">
    <Header @submit="handleAppend" />
    <List @update="handleUpdate" @remove="handleRemove" />
  </div>
  <el-dialog v-model="modalOpen" :title="modalTitle" width="440">
    <div class="form">
      <el-input
        placeholder="Input name"
        class="form-input"
        v-model="currentName"
      />
      <el-checkbox v-model="currentDone">Done</el-checkbox>
      <div class="form-footer">
        <el-button type="primary" @click="handleUpdateItem">Submit</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped>
.todo {
  width: 400px;
  margin: 20px auto;
}

.form {
  margin: 12px 0;
}

.form-field {
  display: flex;
  align-items: center;
}

.form-field:not(:last-of-type) {
  margin-bottom: 16px;
}

.form-label {
  width: 6em;
}

.form-footer {
  text-align: right;
}

.form-footer button {
  height: 28px;
  width: 72px;
  border: 1px solid #efefef;
  cursor: pointer;
  border-radius: 6px;
  background-color: #99cc6690;
  color: #fff;
}
</style>
