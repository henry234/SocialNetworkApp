import colorRed from './color-red'
import colorGrey from './color-grey'
import colorBlue from './color-blue'

import { colors } from '../common'

const color = (value) => ({
    color: value
})

const styles = {
    colorGray: {
        color: '#8E8E93'
    },
    ...colorRed,
    ...colorGrey,
    ...colorBlue
}

export default { ...styles, color, ...colors }
