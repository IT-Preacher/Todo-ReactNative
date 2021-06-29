import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';


export function Navbar(props) {
    return (
        <SafeAreaView style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    text: {
        color: '#fff',
    }
});