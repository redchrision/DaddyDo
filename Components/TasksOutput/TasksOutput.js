// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { View, StyleSheet, Text } from "react-native";
import TasksList from "./TasksList";
import TasksSummary from "./TasksSummary";

import { GlobalStyles } from "../../Constants/Styles";

// array full of objects and every object represents one expense
// date will separate the recent expensees from all the expenses

function TasksOutput({ tasks, tasksPeriod, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (tasks.length > 0) {
        content = <TasksList tasks={tasks}/>

    }
    return ( 
        <View style={styles.container}> 
            <TasksSummary tasks={tasks} periodName={tasksPeriod}/>
            {content}
        </View>     
    );
}

export default TasksOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, 
        paddingTop: 24, 
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    },

    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }

})