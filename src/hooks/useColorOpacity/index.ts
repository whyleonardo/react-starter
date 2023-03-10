import customColors from '@/styles/chakra-ui/theme/foundations/colors'
import { useTheme, theme } from '@chakra-ui/react'

type ColorKeys = keyof typeof theme.colors | keyof typeof customColors

type ColorOpacity = (
  color: ColorKeys,
  colorNumber: number,
  opacity: number
) => string

export const useColorOpacity: ColorOpacity = (color, colorNumber, opacity) => {
  const theme = useTheme()
  const colorValue = theme.colors[color]

  if (colorValue) {
    const opacityValue = Math.round((opacity / 100) * 255).toString(16)
    const opacityHex =
      opacityValue.length === 1 ? `0${opacityValue}` : opacityValue

    return `${colorValue[colorNumber]}${opacityHex}`
  } else {
    return 'null'
  }
}
