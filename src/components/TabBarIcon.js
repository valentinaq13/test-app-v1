import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabBarIcon = (props) => {
    return (
        <>
            {props.screen === 'Home' ? (
                <View style={styles.container}>
                    {props.focused ? (
                        <>
                            <Ionicons name={'home'} size={22} color={"#780000"}></Ionicons>
                            <Text style={styles.activeTtext}>Home</Text>
                        </>
                    ) : (
                        <>
                            <Ionicons name={'home-outline'} size={22} color={"#780000"}></Ionicons>
                            <Text style={styles.text}>Home</Text>
                        </>
                    )}

                </View>
            ) : props.screen === 'About' ? (
                <View style={styles.container}>
                    {props.focused ? (
                        <>
                            <Ionicons name={'location'} size={22} color={"#780000"}></Ionicons>
                            <Text style={styles.activeTtext}>About</Text>
                        </>
                    ) : (
                        <>
                            <Ionicons name={'location-outline'} size={22} color={"#780000"}></Ionicons>
                            <Text style={styles.text}>About</Text>
                        </>
                    )}
                </View>
            ) :
                null}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize: 11,
        color: "#780000"
    },
    activeTtext: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#780000"
    }
});

export default TabBarIcon;
