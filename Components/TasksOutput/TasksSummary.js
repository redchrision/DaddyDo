// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../Constants/Styles'

function TasksSummary({ tasks, periodName }) {

    return (            
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
        </View> 
    );
}

export default TasksSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
})