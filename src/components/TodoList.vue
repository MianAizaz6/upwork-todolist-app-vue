<template>
  <ul class="tasks">
    <li
      v-for="(todo, index) in getTodos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
      class="task"
    >
      <div>
        <span>{{ index + 1 }} - </span>
        <span v-if="selectedId !== todo.id">&nbsp;{{ todo.task }} </span>
        <input v-model="selectedText" v-else />
      </div>
      <div class="actions">
        <span
          class="save info"
          @click="handleSave(todo)"
          v-if="selectedId === todo.id"
          >✓</span
        >
        <span
          class="edit warning"
          @click="
            () => {
              selectedId = todo.id;
              selectedText = todo.task;
            }
          "
          v-if="selectedId !== todo.id"
          >✎</span
        >
        <span
          class="delete error"
          @click="deleteTodo(todo.id)"
          v-if="selectedId !== todo.id"
          >ⓧ</span
        >
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const selectedId = ref(null);
    const selectedText = ref("");

    const getTodos = computed(() => {
      const todos = store.getters["getTodos"];
      return todos;
    });

    const deleteTodo = (id: any) => {
      store.dispatch("deleteTodo", id);
    };
    const handleSave = (task: any) => {
      let todo = { ...task };
      todo.task = selectedText.value;
      store.dispatch("saveTodo", todo);
      selectedId.value = null;
      selectedText.value = "";
    };

    return { selectedId, selectedText, getTodos, deleteTodo, handleSave };
  },
});
</script>

<style>
.tasks {
  padding: 0;
  list-style-type: none;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.task {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #34495e;
  font-weight: bold;
  text-align: left;
}

.task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #41b883;
}

.actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.save,
.edit,
.delete {
  width: 1.25rem;
  height: 1.25rem;
}

.error {
  color: #dd2222;
}

.info {
  color: #4190b8;
}

.warning {
  color: #eb8532;
}

.editable {
  width: 100%;
  outline: 1px solid #4167b8;
  padding: 4px 10px;
  user-select: text;
  cursor: auto;
}
</style>
