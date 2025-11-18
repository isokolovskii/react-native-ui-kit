import { ActivityIndicator } from 'react-native'

import { genericMemo } from '../../../utils/genericMemo'
import { makeStyles } from '../../../utils/makeStyles'
import type { BaseButtonProps, ButtonVariant } from '../types'

import { useTypeBasedStyle } from './useTypeBasedStyle'

export type ButtonActivityIndicatorProps<Variant extends ButtonVariant> = Pick<
  Required<BaseButtonProps<Variant>>,
  'size'
>

const ButtonActivityIndicatorComponent = <Variant extends ButtonVariant>({
  size,
}: ButtonActivityIndicatorProps<Variant>) => {
  const styles = useStyles()

  const sizeBasedStyle = useTypeBasedStyle(size, styles) as { height: number }

  return (
    <ActivityIndicator
      color={styles.activityIndicator.color}
      size={sizeBasedStyle.height ?? 'small'}
      testID='Button_ActivityIndicator'
    />
  )
}

const useStyles = makeStyles(({ theme }) => ({
  xlarge: { height: 21 },

  large: { height: 21 },

  base: { height: 17.5 },

  small: { height: 14 },

  activityIndicator: { color: theme.Button.Disabled.disabledButtonTextColor },
}))

export const ButtonActivityIndicator = genericMemo(
  ButtonActivityIndicatorComponent
)
