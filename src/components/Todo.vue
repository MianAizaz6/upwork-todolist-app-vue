<template>
  <form @submit.prevent="addTodo">
    <input
      class="todo-input"
      type="text"
      placeholder="Enter a new task"
      v-model="list.task"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    // Define reactive state
    const list = reactive({
      task: "",
    });

    // Define methods
    const addTodo = () => {
      store.dispatch("addTodo", list);
      list.task = "";
    };

    // Return reactive properties and methods
    return {
      list,
      addTodo,
    };
  },
});
</script>

<style>
.todo-input {
  font-family: "Open Sans", sans-serif;
  width: 70%;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.25rem;
  border-style: none;
  border: solid 1px lightgray;
  box-sizing: border-box;
}
</style>
