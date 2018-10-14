const makeCircle = size => ({
    width: size,
    height: size,
    borderRadius: size / 2
})

const flex = (num = 1) => ({
    flex: num
})

const bgC = (color = '#fff') => ({
    backgroundColor: color
})

const bR = (num = 10) => ({
    borderRadius: num
})
const bW = (num = 0.6) => ({
    borderRadius: num
})

const padding = (num = 16) => ({
    padding: num
})
const pH = (num = 10) => ({
    paddingHorizontal: num
})
const pV = (num = 10) => ({
    paddingVertical: num
})
const pT = (num = 10) => ({
    paddingTop: num
})
const pB = (num = 10) => ({
    paddingBottom: num
})
const pL = (num = 10) => ({
    paddingLeft: num
})
const pR = (num = 10) => ({
    paddingRight: num
})

const margin = (num = 16) => ({
    margin: num
})
const mH = (num = 10) => ({
    marginHorizontal: num
})
const mV = (num = 10) => ({
    marginVertical: num
})
const mT = (num = 10) => ({
    marginTop: num
})
const mB = (num = 10) => ({
    marginBottom: num
})
const mL = (num = 10) => ({
    marginLeft: num
})
const mR = (num = 10) => ({
    marginRight: num
})

export default {
    makeCircle,
    flex,
    bgC,
    padding,
    pH,
    pV,
    pT,
    pB,
    pL,
    pR,
    margin,
    mH,
    mV,
    mT,
    mB,
    mL,
    mR,
    bR,
    bW
}
