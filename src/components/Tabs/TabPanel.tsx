import type { FC, ReactNode } from 'react'
import { View } from 'react-native'

export interface TabPanelProps {
  /** Текущий активный индекс */
  readonly activeIndex: number
  /** Индекс этой панели **/
  readonly index: number
  readonly children?: ReactNode
}

// Часть навигационного компонента Tabs
// Для упрощения связанного с табами контекста в верстке
//
export const TabPanel: FC<TabPanelProps> = ({
  activeIndex,
  index,
  children,
  ...rest
}) => {
  if (activeIndex !== index) {
    return null
  }

  return <View {...rest}>{children}</View>
}
