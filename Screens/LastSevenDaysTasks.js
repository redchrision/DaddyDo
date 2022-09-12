import { useEffect, useState, useContext } from 'react';
import TasksOutput from '../Components/TasksOutput/TasksOutput';
import { getDateMinusDays } from '../util/date';
import { fetchTasks } from '../util/http';
import { TasksContext } from '../store/tasks-context';

function LastSevenDaysTasks() {
    const tasksCtx = useContext(TasksContext);
    const [fetchedTasks, setFetchedTasks] = useState([]);

    useEffect(() => {
        async function getTasks(){
           const tasks = await fetchTasks();
           setFetchedTasks(tasks)
           tasksCtx.setTasks(tasks) 
        }
        getTasks();
    }, []);

    const recentTasks = tasksCtx.tasks.filter((task) => {
        const today = new Date();
        const sevenDaysAgo = getDateMinusDays(today, 7);

        return task.date > sevenDaysAgo && task.date <= today;
    })

    return <TasksOutput 
        tasks = {recentTasks} 
        tasksPeriod='Last 7 days' 
        fallbackText='No tasks entered for the last 7 days.'
        />
}

export default LastSevenDaysTasks;