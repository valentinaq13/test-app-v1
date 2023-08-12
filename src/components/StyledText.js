import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: "grey"
    },
    bold: {
        fontWeight: "bold"
    },
    red: {
        color: "red"
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})

const StyledText = ({ red, bold, children, big, small }) => {
    const textStyles = [
        styles.text,
        red && styles.red,
        big && styles.big,
        small && styles.small,
        bold && styles.bold,
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}

export default StyledText

