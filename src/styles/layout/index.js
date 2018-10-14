import { StyleSheet } from 'react-native'

import card from './components/card'
import list from './components/list'
import border from './components/border'

const styles = {
    posA: {
        position: 'absolute'
    },
    posR: {
        position: 'relative'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fxdC: {
        flexDirection: 'column'
    },
    fxdR: {
        flexDirection: 'row'
    },
    jcFS: {
        justifyContent: 'flex-start'
    },
    jcFE: {
        justifyContent: 'flex-end'
    },
    jcC: {
        justifyContent: 'center'
    },
    jcSB: {
        justifyContent: 'space-between'
    },
    jcSA: {
        justifyContent: 'space-around'
    },
    aiFS: {
        alignItems: 'flex-start'
    },
    aiFE: {
        alignItems: 'flex-end'
    },
    aiC: {
        alignItems: 'center'
    },
    aiB: {
        alignItems: 'baseline'
    },
    asC: {
        alignSelf: 'center'
    },
    asFS: {
        alignSelf: 'flex-start'
    },
    asFE: {
        alignSelf: 'flex-end'
    },
    bW: {
        borderWidth: StyleSheet.hairlineWidth
    },
    bC: {
        borderColor: '#d9d9d9'
    },
    bTW: {
        borderTopWidth: StyleSheet.hairlineWidth
    },
    bBW: {
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    bRW: {
        borderRightWidth: StyleSheet.hairlineWidth
    },
    bLW: {
        borderLeftWidth: StyleSheet.hairlineWidth
    },
    bTLW: {
        borderTopLeftWidth: StyleSheet.hairlineWidth
    },
    bTRW: {
        borderTopRightWidth: StyleSheet.hairlineWidth
    },
    taC: {
        textAlign: 'center'
    },
    shadow: {
        shadowColor: '#DEE4F1',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2.5,
        elevation: 3,
        position: 'relative',
        top: -2,
        left: -2,
        margin: 5
    }
}

export default { ...styles, card, list, border }
