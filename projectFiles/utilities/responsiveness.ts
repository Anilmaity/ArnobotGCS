import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const hs = (size: number) => (width / guidelineBaseWidth) * size
const vs = (size: number) => (height / guidelineBaseHeight) * size
const ms = (size: number, factor = 0.8) => size + (hs(size) - size) * factor
const fs = (size: number, factor = 0.8) => size + (hs(size) - size) * factor

export { hs, vs, ms, fs }
