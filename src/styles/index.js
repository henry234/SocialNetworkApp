import { StyleSheet } from 'react-native'

import colors from './colors'
import layout from './layout'

import metrics from './metrics'

const customs = {
    fontFamily: 'Verdana'
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    bottomHairline: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#8E8E93'
    },
    thin: {
        fontWeight: '100'
    },
    extraLight: {
        fontWeight: '200'
    },
    light: {
        fontWeight: '300'
    },
    regular: {
        fontWeight: '400'
    },
    medium: {
        fontWeight: '500'
    },
    semibold: {
        fontWeight: '600'
    },
    bold: {
        fontWeight: '700'
    },
    title1: {
        backgroundColor: 'transparent',
        color: '#000000',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 28,
        fontWeight: '400',
        letterSpacing: 0.355469,
        lineHeight: 34
    },
    title2: {
        backgroundColor: 'transparent',
        color: '#000000',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 22,
        fontWeight: '400',
        letterSpacing: 0.34375,
        lineHeight: 28
    },
    title3: {
        backgroundColor: 'transparent',
        color: '#000000',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 0.361328,
        lineHeight: 25
    },
    headline: {
        backgroundColor: 'transparent',
        color: '#000000',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 17,
        fontWeight: '600',
        letterSpacing: -0.408,
        lineHeight: 22
    },
    body: {
        backgroundColor: 'transparent',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.408
    },
    callout: {
        backgroundColor: 'transparent',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: -0.32
    },
    subhead: {
        backgroundColor: 'transparent',
        color: '#000000',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 15,
        fontWeight: '400',
        letterSpacing: -0.24,
        lineHeight: 20
    },
    footnote: {
        backgroundColor: 'transparent',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 13,
        color: '#000000',
        fontWeight: '400',
        lineHeight: 18,
        letterSpacing: -0.078
    },
    caption1: {
        backgroundColor: 'transparent',
        color: '#000000',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 16
    },
    caption2: {
        backgroundColor: 'transparent',
        color: '#000000',
        fontFamily: customs.fontFamily || 'System',
        fontSize: 11,
        fontWeight: '400',
        letterSpacing: 0.06,
        lineHeight: 13
    },
    colorGray: {
        color: '#8E8E93'
    },
    textInput: {
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#8E8E93',
        color: '#484848',
        fontFamily: 'Verdana'
    },
    button: {
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#367EEF'
    },
    hairlineWidth: StyleSheet.hairlineWidth
}

export default {
    ...styles,
    ...colors,
    ...layout,
    ...metrics
}
