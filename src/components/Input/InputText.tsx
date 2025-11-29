import type { FC } from 'react'
import { View, type StyleProp, type ViewStyle } from 'react-native'

import { InputTextBase, type InputTextBaseProps } from './InputTextBase'

export interface InputTextProps extends InputTextBaseProps {
  /** Дополнительная стилизация для контейнера компонента */
  readonly style?: StyleProp<ViewStyle>
}

/**
 * Компонент для ввода текста
 * @link https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=484-5470&m=dev
 * @see InputTextBase
 * @see InputTextBaseProps
 */
export const InputText: FC<InputTextProps> = ({ style, ...otherProps }) => {
  return (
    <View style={style}>
      <InputTextBase {...otherProps} />
    </View>
  )
}
