import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//Components
import Main from '../screens/Main';
import TabBarIcon from '../components/TabBarIcon';
//UI

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="MainApp"
            screenOptions={{
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name="MainApp"
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabBarIcon({ focused, screen: 'Home' }),
                }}
            />
            <Tab.Screen
                name="About"
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabBarIcon({ focused, screen: "About" }),
                }}
            />
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    tabBarStyle: {
        ...Platform.select({
            ios: {
                paddingBottom: 28,
                height: 90,
            },
            android: {
                paddingBottom: 10,
                height: 70,
            }
        })
    },
});

const MainNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const MainApp = () => {

    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default MainApp;
