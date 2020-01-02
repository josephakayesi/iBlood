import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

import * as theme from '../theme'

export default class Typography extends Component {
    render() {
        const {
            h1,
            h2,
            h3,
            title,
            body,
            caption,
            small,
            size,
            // Styling
            bold,
            semibold,
            light,
            center,
            right,
            // Colors
            color,
            accent,
            primary,
            secondary,
            tertiary,
            black,
            white,
            gray,
            gray2,
            style,
            children,
            ...props
        } = this.props

        const textStyles = [
            styles.block,
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            title && styles.title,
            body && styles.body,
            caption && styles.caption,
            small && styles.small,
            size && { fontSize: size },
            bold && styles.bold,
            semibold && styles.semibold,
            light && styles.light,
            center && styles.center,
            right && styles.right,
            color && styles[color],
            color && !styles[color] && { color },
            // Color shortcuts
            accent && styles.accent,
            primary && styles.primary,
            secondary && styles.secondary,
            tertiary && styles.tertiary,
            black && styles.black,
            white && styles.white,
            gray && styles.gray,
            gray2 && styles.gray2,
            style, // Rewrite predefined styles
        ]

        return (
            <Text style={textStyles} {...props}>
                {children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    // Default style
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: theme.sizes.font,
        color: theme.colors.black
    },
    // Variations
    bold: {
        fontFamily: 'Montserrat-Bold'
    },
    semibold: {
        fontFamily: 'Montserrat-SemiBold'
    },
    light: {
        fontFamily: 'Montserrat-Light'
    },
    // Position
    center: {
        textAlign: 'center'
    },
    right: {
        textAlign: 'right'
    },
    // Colors
    accent: {
        color: theme.colors.accent
    },
    primary: {
        color: theme.colors.primary
    },
    secondary: {
        color: theme.colors.secondary
    },
    tertiary: {
        color: theme.colors.tertiary
    },
    black: {
        color: theme.colors.black
    },
    white: {
        color: theme.colors.white
    },
    gray: {
        color: theme.colors.gray
    },
    gray2: {
        color: theme.colors.gray2
    },
    // Fonts
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,
    title: theme.fonts.title,
    body: theme.fonts.body,
    caption: theme.fonts.caption,
    small: theme.fonts.small,

})
