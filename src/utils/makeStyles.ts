import type { ImageStyle, TextStyle, ViewStyle } from 'react-native'

import { useFonts } from '../hooks/useFonts'
import { useTheme } from '../hooks/useTheme'
import {
  type FontsConfigType,
  type ThemeType,
  darkTheme,
  lightTheme,
  ThemeVariant,
} from '../theme'

export const makeStyles =
  <T extends StylesObject>(createStyles: CreateStyles<T>): (() => T) =>
  () => {
    const fonts = useFonts()
    const theme = useTheme()
    const themeValues = theme === ThemeVariant.Dark ? darkTheme : lightTheme

    return createStyles({ ...themeValues, fonts }) as T
  }

type StylesItem = ViewStyle | ImageStyle | TextStyle

type StylesObject = Record<string, StylesItem>

type CreateStyles<T extends StylesObject> = (
  theme: ThemeType & FontsConfigType
) => CheckInvalidProps<T> extends never
  ? T
  : 'TypeError. Invalid key of style property was used.'

type ExcludeStylesProps<T> = Exclude<
  keyof T,
  keyof (ViewStyle & ImageStyle & TextStyle)
>

type CheckInvalidProps<T extends object> = {
  [Key in keyof T]: ExcludeStylesProps<T[Key]>
}[keyof T]
