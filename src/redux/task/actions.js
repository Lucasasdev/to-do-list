import taskActionTypes from "./action-types";

export const addTask = (payload) => ({
  type: taskActionTypes.ADD_TASK,
  payload,
});
