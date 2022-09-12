// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { FlatList } from "react-native";
import Task from "./Task";

function renderTasksEntry(entryData) {
    return <Task {...entryData.item}/>;
}

function TasksList({ tasks }) {
    return <FlatList 
                data= {tasks} 
                renderItem={renderTasksEntry} 
                keyExtractor={(item) => item.id}
        />;
}

export default TasksList;