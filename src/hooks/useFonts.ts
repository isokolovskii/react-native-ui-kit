import { useContext } from 'react'

import { ThemeContext } from '../theme'

export const useFonts = () => {
  return useContext(ThemeContext).fonts
}
