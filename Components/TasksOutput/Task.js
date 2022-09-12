// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../Constants/Styles";

import { getFormattedDate } from '../../util/date'

import { useNavigation } from '@react-navigation/native'

function Task( {id, description, date }) {

    const navigation = useNavigation();

    function taskPressHandler() {
        navigation.navigate('TaskManager', {
            taskId: id
        });
    }

    return <Pressable 
                onPress={taskPressHandler}
                style={({pressed}) => pressed && styles.pressed}
            >
        <View style={styles.task}>
            <View>
                <Text style={[styles.textGlobal, styles.description]}>{description}</Text>
                <Text style={styles.textGlobal}>{getFormattedDate(date)}</Text>
            </View>
        </View>

    </Pressable>
}

export default Task;

const styles = StyleSheet.create({
    task: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justyfyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        showdowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },

    textGlobal: {
        color: GlobalStyles.colors.primary50
    },

    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },

    pressed: {
        opacity: 0.75,
    }
})