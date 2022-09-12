import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskForm from '../Components/ManageTask/TaskForm';
import IconButton from '../Components/UI/IconButton';
import { GlobalStyles } from '../Constants/Styles';
import { TasksContext } from '../store/tasks-context';
import { storeTask, updateTask, deleteTask } from '../util/http';

function TaskManager( { route, navigation }) {
    const tasksCtx = useContext(TasksContext);

    const editedTaskId = route.params?.taskId;
    const isEditing = !!editedTaskId; // converts the value into a boolean

    const selectedTask = tasksCtx.tasks.find(task => task.id === editedTaskId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Task' : 'Add Task'
        })
    }, [ navigation, isEditing])

    function deleteTaskHandler() {
        //await deleteTask(editedTaskId); // used for the backend
        tasksCtx.deleteTask(editedTaskId); 
        navigation.goBack(); // we go back to the original screen that opened that screen
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(taskData){
        if (isEditing) {
            tasksCtx.updateTask(
                editedTaskId,
                taskData) // updates locally
            // await updateTask(editedTaskId, taskData) // updates on the backend
        } else {
            storeTask(taskData);
            tasksCtx.addTask(taskData);
        }

        navigation.goBack();
    }

    return ( 
        <View style={styles.container}> 
            <TaskForm 
                submitButtonLabel={isEditing ? 'Update' : 'Add'} 
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                defaultValues={selectedTask}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton 
                        icon='trash' 
                        color = {GlobalStyles.colors.error500} 
                        size={36} 
                        onPress={deleteTaskHandler} 
                    />
                </View>
            )}
        </View>
    );
}

export default TaskManager;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24, 
        backgroundColor: GlobalStyles.colors.primary800
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8, 
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})