<template>
  <div id="app">
    <div class="container">
      <div class="logo">
        <img src="@/assets/applogo.png" alt="app logo" width="100" />
        TODO
      </div>
      <Todo />
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todo from "./components/Todo.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    Todo,
    TodoList,
  },
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 253, 163, 1) 100%
  );
}

.container {
  width: 50%;
  height: auto;
  border: 1px solid #9a9a9b;
  border-radius: 10px;
  padding: 34px;
  background-color: #eef0f0;
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.42);
  display: flex;
  flex-direction: column;
  gap: 12px !important;
}

.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 48px;
  font-weight: 600;
  color: #de2821;
}
</style>
