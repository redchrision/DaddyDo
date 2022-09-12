// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { createContext, useReducer } from "react";

export const TasksContext = createContext({
    tasks: [],
    addTask: (description, date) => {},
    setTasks: (tasks) => {},
    deleteTask: (id) => {},
    updateTask: (id, {description, date}) => {}
});

function TasksReducer(state, action) {
    switch (action.kind) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.detail, id: id}, ...state]
        case 'SET':
            //const inverted  = action.detail.reverse()
            return action.detail;
        case 'UPDATE':
            const updatableTaskIndex = state.findIndex(
                (task) => task.id === action.detail.id
            );
            const updatableTask = state[updatableTaskIndex];

            const updatedTask = { ...updatableTask, ...action.detail.data };
            const updatedTasks = [...state];
            updatedTasks[updatableTaskIndex] = updatedTask;
            return updatedTasks;
        case 'DELETE':
            return state.filter((task) => task.id != action.detail);
        default: 
            return state
    }
}

function TasksContextProvider({ children }) {
    const [tasksState, dispatch]= useReducer(TasksReducer, []);

    function addTask(taskData) {
        dispatch({ kind: 'ADD', detail: taskData });
    }

    function setTasks(tasks) {
        dispatch({type: 'SET', detail: tasks})
    }

    function deleteTask(id) {
        dispatch({ kind: 'DELETE', detail: id});
    }

    function updateTask(id, taskData) {
        dispatch ({ kind: 'UPDATE', detail: {id: id, data: taskData}});
    }

    const value = {
        tasks: tasksState,
        setTasks: setTasks,
        addTask: addTask,
        deleteTask: deleteTask,
        updateTask: updateTask
    }

    return <TasksContext.Provider value={value}>{ children }</TasksContext.Provider>
}

export default TasksContextProvider;