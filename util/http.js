// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import axios from 'axios';

const BACKEND_URL = 'https://daddydo-d3cb9-default-rtdb.europe-west1.firebasedatabase.app';

// stores tasks 
export function storeTask(taskData) {
   axios.post(BACKEND_URL + '/tasks.json', taskData
    );
}

//fetches tasks
export async function fetchTasks() {
    const response = await axios.get(BACKEND_URL + '/tasks.json');

    const tasks = [];

    // we dynamically access the propriety
    // it will return an array of objects with the necessary format 
    for (const key in response.data) {
        const taskObj = {
            id: key,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }

        tasks.push(taskObj);
    }

    return tasks;
}

// Used for server connection, to be further fixed
/*export function updateTask(id, taskData) {
    return axios.put(BACKEND_URL + `/tasks/${id}.json`, taskData);
}

export function deleteTask(id) {
    return axios.delete(BACKEND_URL + `/tasks/${id}.json`)
}*/ 