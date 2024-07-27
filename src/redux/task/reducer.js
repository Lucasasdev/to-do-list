import taskActionTypes from "./action-types";

const initialValue = {
  tasks: [],
};

const taskReducer = (state = initialValue, action) => {
  switch (action.type) {
    case taskActionTypes.ADD_TASK:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
