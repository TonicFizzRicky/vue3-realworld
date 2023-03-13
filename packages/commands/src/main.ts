import "./main.css";
import { createApp } from "vue";
import App from "./App.vue";

// 全局指令

createApp(App)
  .directive("focus", {
    mounted: (el: HTMLElement) => {
      el.focus();
    },
  })
  .directive("color", {
    mounted: (el: HTMLElement, binding) => {
      el.style.color = binding.value ?? "#09d";
    },
  })
  .mount("#app");
