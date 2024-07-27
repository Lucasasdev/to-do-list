const initialValue = {
  tasks: [
    {
      id: 1,
      title: "Math test",
      description: "Tomorrow I'm going to get a math test.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Science test",
      description: "Tomorrow I'm going to get a science test.",
      isCompleted: false,
    },
  ],
};

const taskReducer = (state = initialValue, action) => {
  if (action.type === "user/addTask") {
    return { ...state, tasks: action.payload };
  }

  return state;
};

export default taskReducer;

/* 
 
*/
