import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import * as theme from '../theme'

export default class Block extends Component {
    render() {
        const {
            flex,
            row,
            column,
            card,
            shadow,
            center,
            right,
            left,
            middle,
            color,
            space,
            style,
            children,
            ...props
        } = this.props

        const blockStyles = [
            styles.block,
            flex && { flex },
            flex === false && { flex: 0 }, // reset / disable flex
            row && styles.row,
            column && styles.column,
            card && styles.card,
            shadow && styles.shadow,
            center && styles.center,
            right && styles.right,
            left && styles.left,
            middle && styles.middle,
            color && styles[color],
            space && { justifyContent: `space-${space}` },
            color && !styles[color] && { backgroundColor: color }, // Custom background 
            style, // Rewrite predefined styles
        ]

        return (
            <View style={blockStyles} {...props}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    card: {
        borderRadius: theme.sizes.border
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    right: {
        justifyContent: 'flex-end'
    },
    left: {
        justifyContent: 'flex-start'
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.75,
        shadowRadius: 10,
        elevation: 0.2
    },
    accent: {
        backgroundColor: theme.colors.accent
    },
    primary: {
        backgroundColor: theme.colors.primary
    },
    secondary: {
        backgroundColor: theme.colors.secondary
    },
    tertiary: {
        backgroundColor: theme.colors.tertiary
    },
    black: {
        backgroundColor: theme.colors.black
    },
    white: {
        backgroundColor: theme.colors.white
    },
    gray: {
        backgroundColor: theme.colors.gray
    },
    gray2: {
        backgroundColor: theme.colors.gray2
    }
})
