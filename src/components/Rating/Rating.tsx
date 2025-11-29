import type { FC } from 'react'
import { type AccessibilityProps, View, type ViewProps } from 'react-native'

import { makeStyles } from '../../utils/makeStyles'

import { RatingClear } from './RatingClear'
import { RatingItem } from './RatingItem'

/**
 * Свойства компонента рейтинга
 * @see Rating - компонент рейтинга
 */
export interface RatingProps
  extends AccessibilityProps,
    Pick<ViewProps, 'testID'> {
  /**
   * Управление состоянием включённости компонента для нажатий пользователем
   * @default false
   */
  readonly disabled?: boolean
  /**
   * Отображение элемента с паддингами
   * @default false
   */
  readonly paddings?: boolean
  /**
   * Максимальный рейтинг(количество звёздочек)
   * @default 5
   */
  readonly maxRating?: number
  /**
   * Текущий рейтинг
   */
  readonly rating: number
  /**
   * Обработчик изменения рейтинга
   * @param rating - новый рейтинг
   */
  readonly onChange: (rating: number) => void
  /**
   * Обработчик очистки рейтинга
   */
  readonly onClear: () => void
}

/**
 * Компонент рейтинга
 * @param disabled - управление состоянием включённости компонента для нажатий пользователем
 * @param paddings - отображение элемента с паддингами
 * @param maxRating - максимальный рейтинг(количество звёздочек)
 * @param rating - текущий рейтинг
 * @param onChange - обработчик изменения рейтинга
 * @param onClear - обработчик изменения рейтинга
 * @see RatingProps - тип свойств компонента рейтинга
 * @see RatingItem - элемент рейтинга с иконкой звёздочки
 * @see RatingClear - элемент рейтинга для очистки
 */
export const Rating: FC<RatingProps> = ({
  disabled = false,
  paddings = false,
  maxRating = 5,
  rating,
  onChange,
  onClear,
  testID = 'RatingClear',
  ...rest
}) => {
  const styles = useStyles()

  const handleItemPress = (index: number) => () => {
    onChange(index + 1)
  }

  return (
    <View style={styles.container}>
      <RatingClear
        disabled={disabled}
        paddings={paddings}
        testID={testID}
        onPress={onClear}
        {...rest}
      />
      {new Array(maxRating).fill(null).map((_, index) => (
        <RatingItem
          checked={index < rating}
          // Использовать индекс массива в качестве ключа - единственно возможное и правильное решение
          // eslint-disable-next-line react/no-array-index-key
          key={`RatingItem-${index}`}
          paddings={paddings}
          testID={`RatingItem-${index + 1}`}
          onPress={handleItemPress(index)}
        />
      ))}
    </View>
  )
}

const useStyles = makeStyles(({ theme }) => ({
  container: {
    flexDirection: 'row',
    gap: theme.General.inlineSpacing,
    alignItems: 'center',
  },
}))
