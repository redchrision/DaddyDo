import { useState, useEffect, useContext } from 'react';
import TasksOutput from '../Components/TasksOutput/TasksOutput';
import { fetchTasks } from '../util/http';
import { TasksContext } from '../store/tasks-context';

function AllTasks() {

    const [fetchedTasks, setFetchedTasks] = useState([]);

/*    useEffect(() => {
        async function getTasks(){
           const tasks = await fetchTasks();
           setFetchedTasks(tasks)
        }
        getTasks();
    }, []); */

    const tasksCtx = useContext(TasksContext);
    return (
     <TasksOutput tasks={tasksCtx.tasks} 
        tasksPeriod='All tasks'
        fallbackText='No tasks found.'
        />
    )
} 

export default AllTasks;