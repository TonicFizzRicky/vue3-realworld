import { defineStore } from "pinia";
import { ref } from "vue";
import type { ITodoItem } from "../typing";

export const useTodoStore = defineStore("todo", () => {
  const list = ref<ITodoItem[]>([]);
  
  const addTodo = (name: ITodoItem["name"]) => {
    list.value.push({
      done: false,
      id: Date.now(),
      name,
    });
  };

  const removeTodo = (id: ITodoItem["id"]) => {
    list.value = list.value.filter((item) => item.id !== id);
  };

  const updateTodo = (target: ITodoItem) => {
    const index = list.value.findIndex((item) => item.id === target.id);
    if (index >= 0) {
      list.value[index] = target;
    }
  };

  return {
    list,
    addTodo,
    removeTodo,
    updateTodo,
  };
});
