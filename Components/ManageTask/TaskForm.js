// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Input from './Input'
import Button from '../UI/Button';
import { GlobalStyles } from '../../Constants/Styles';

function TaskForm ({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {

    const [inputs, setInputs] = useState({
        date: { 
            value : defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '', 
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        },
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true}
            };
        })
    }

    function submitHandler() {
        const taskData ={
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const dateIsValid = taskData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = taskData.description.trim().length > 0;

        if (!dateIsValid || !descriptionIsValid) {
            //Alert.alert('Invalid input', 'Please check your input values')
            setInputs ((curInputs) => {
                return {
                    date: { value: curInputs.date.value, isValid: dateIsValid },
                    description: {
                        value: curInputs.description.value,
                        isValid: descriptionIsValid
                    }
                }
            })
            return;
        }

        onSubmit(taskData)
    }

    const fromIsInvalid = !inputs.date.isValid || !inputs.description.isValid;

    return <View style={styles.form}>
        <Text style={styles.title}>Your Task</Text>
        <View>
            <Input label = 'Date'
             invalid = {!inputs.date.isValid}
             textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLenght: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputs.date.value                }}
            />
        </View>

        <Input label = 'Description' 
                invalid = {!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    //autoCorrect: false,
                    //autoCapitalize: none
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value
             }}
        />
        
        { fromIsInvalid && (<Text style={styles.errorMessage}> Invalid input values. Please check your entered data. </Text>)}

        <View style={styles.buttons}>
            <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
    </View>
}

export default TaskForm;

const styles = StyleSheet.create ({
    form: {
        marginTop: 30,
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 23
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8
    },

    errorMessage: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8
    }
})