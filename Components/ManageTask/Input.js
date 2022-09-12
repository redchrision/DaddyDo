// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { TextInput, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../Constants/Styles';

function Input({label, textInputConfig, invalid}){
    const inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline);
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return <View style={styles.inputContainer}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
        <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },

    label: { 
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },

    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18, 
        color: GlobalStyles.colors.primary700
    },

    inputMultiline: {
        minHeight: 100, 
        textAlignVertical: 'top' // for the same behaviour on both platforms ios and Android
    },

    invalidLabel: {
        color: GlobalStyles.colors.error500

    },

    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
})
