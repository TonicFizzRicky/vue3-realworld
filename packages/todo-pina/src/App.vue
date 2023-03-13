<script setup lang="ts">
import Header from "./components/header/index.vue";
import List from "./components/list/index.vue";
import Modal from "./components/modal/index.vue";
import { ref } from "vue";
import type { ITodoItem } from "./typing/index";
import { useTodoStore } from '../src/store/todo';

const store = useTodoStore()


// const list = ref<ITodoItem[]>([]);
const modalOpen = ref(false);
const modalTitle = ref("查看详情");
const currentItem = ref<null | ITodoItem>(null) // 当前需要修改的事项

const currentName = ref("");
const currentDone = ref(false);
const currentId = ref(0);

// 新增
const handleAppend = (name: ITodoItem["name"]) => {
  // list.value.push({
  //   name,
  //   id: Date.now(),
  //   done: false,
  // });
 store.addTodo(name)
};

// 删除
const handleRemove = (id: ITodoItem["id"]) => {
  // list.value = list.value.filter((item) => item.id !== id);
  store.removeTodo(id)
};

// 关闭弹窗
const handleToggleModal = () => {
  modalOpen.value = !modalOpen.value;
};

// 修改
const handleUpdate = (item: ITodoItem) => {
  const { name, done, id } = item;
  currentName.value = name;
  currentDone.value = done
  currentId.value = id;
  handleOpenModal();
};

// 打开弹窗
const handleOpenModal = () => {
  modalOpen.value = true
}

// 关闭弹窗
const handleCloseModal = () => {
  modalOpen.value = false
}

//
const handleUpdateItem = () => {
  if (!currentName.value.trim().length) return;

  store.updateTodo({
    name: currentName.value,
    id: currentId.value,
    done: currentDone.value
  })

  // 更新完毕后，关闭弹窗
  handleCloseModal()
}


</script>

<template>
  <div class="todo">
    <Header @submit="handleAppend" />
    <List @update="handleUpdate" @remove="handleRemove" />
  </div>
  <Modal :open="modalOpen" :title="modalTitle" @close="handleToggleModal">
    <div class="form">
      <div class="form-field">
        <span class="form-label">Name:</span>
        <input type="text" placeholder="Input name" class="form-input" v-model="currentName" />
      </div>
      <div class="form-field">
        <span class="form-label">Done:</span>
        <input type="checkbox" class="form-input" v-model="currentDone" />
      </div>
      <div class="form-footer">
        <button @click="handleUpdateItem">Update</button>
      </div>
    </div>
  </Modal>
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

.form-field input[type="text"] {
  flex: 1;
  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  height: 28px;
  padding: 0 4px;
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
  background-color: #99CC6690;
  color: #fff;
}
</style>
