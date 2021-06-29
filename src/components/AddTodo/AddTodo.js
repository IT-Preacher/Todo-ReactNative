import React, {useState}from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Alert} from 'react-native';


export function AddTodo(props) {
    const [value, setValue] = useState(' ');

    function pressHandler(){
        if(value.trim()) {
            props.onSubmit(value);
            setValue(' ');
        }else{
            Alert.alert('Enter your task')
        }
    }

    return (
        <SafeAreaView style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Enter name of task'
            />
            <Button 
                title='Add'
                onPress={pressHandler}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input:{
        width: '70%',
        padding: 10,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: '#3949ab',
        marginBottom: 10,
    },
});