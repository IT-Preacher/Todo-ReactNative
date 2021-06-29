import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

export function TodoItem({todo, onRemove}){
    return (
        <TouchableOpacity 
            onPress={() => Alert.alert(`Pressed ${todo.id}`)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todoItem}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    },
});