const colors = {
    accent: '#F72B2B',
    primary: '#D61B1F',
    secondary: '#3A3232',
    tertiary: '#ED6004',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#D9D2D2',
    gray2: '#F6F5F5'
}

const sizes = {
    // Global sizes
    base: 12,
    font: 12,
    border: 10,

    // Font sizes
    h1: 32,
    h2: 26,
    h3: 18,
    title: 16,
    body: 12,
    caption: 12,
    small: 8
}

const fonts = {
    h1: {
        fontFamily: MontserratBold,
        fontSize: sizes.h1
    },
    h2: {
        fontSize: sizes.h2
    },
    h3: {
        fontFamily: MontserratSemiBold,
        fontSize: sizes.h3
    },
    title: {
        fontSize: sizes.title
    },
    body: {
        fontSize: sizes.body
    },
    caption: {
        fontFamily: MontserratBold,
        fontSize: sizes.caption
    },
    small: {
        fontSize: sizes.small
    }
}

export { colors, sizes, fonts }