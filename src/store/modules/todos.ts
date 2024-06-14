export const state = {
  todos: [],
};

export const getters = {
  getTodos: (state: any) => state.todos,
};

export const mutations = {
  ADD_TODO: (state: any, payload: any) => {
    console.log("payload", payload);
    const newTask = {
      id: state.todos?.length,
      task: payload.task,
      completed: false,
    };
    state.todos.unshift(newTask);
  },

  DELETE_TODO: (state: any, payload: any) => {
    const index = state.todos.findIndex((todo: any) => todo.id === payload);
    state.todos.splice(index, 1);
  },
  SAVE_TODO: (state: any, payload: any) => {
    state.todos.find((todo: any) => {
      if (todo.id === payload.id) {
        todo.task = payload.task;
      }
    });
  },
};

export const actions = {
  addTodo: (context: any, payload: any) => {
    context.commit("ADD_TODO", payload);
  },

  deleteTodo: (context: any, payload: any) => {
    context.commit("DELETE_TODO", payload);
  },
  saveTodo: (context: any, payload: any) => {
    console.log(payload);
    context.commit("SAVE_TODO", payload);
  },
};
