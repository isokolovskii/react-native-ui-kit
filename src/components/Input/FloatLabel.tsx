import type { FC } from 'react'
import { View, type StyleProp, type ViewStyle } from 'react-native'

import { InputTextBase, type InputTextBaseProps } from './InputTextBase'

export interface FloatLabelProps extends InputTextBaseProps {
  /** Текст плейсхолдера */
  readonly placeholder: string
  /** Показать индикатор загрузки в поле */
  readonly loading?: boolean
  /** Дополнительная стилизация для контейнера компонента */
  readonly style?: StyleProp<ViewStyle>
}

/**
 * Компонент для ввода текста с плавающим плейсхолдером
 * @link https://www.figma.com/design/4TYeki0MDLhfPGJstbIicf/UI-kit-PrimeFace-(DS)?node-id=2168-9279
 * @see InputTextBaseProps
 * @deprecated Используйте {@link InputText} с `floatLabel={true}`
 */
export const FloatLabel: FC<FloatLabelProps> = ({ style, ...otherProps }) => {
  return (
    <View style={style}>
      <InputTextBase {...otherProps} />
    </View>
  )
}

export const FloatLabelTestId = {
  root: 'FloatLabel',
  pressable: 'PressableContainer',
  placeholder: 'Placeholder',
}
