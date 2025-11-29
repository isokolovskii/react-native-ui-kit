import { ActivityIndicator } from 'react-native'

import { makeStyles } from '../../../utils/makeStyles'
import type { BaseButtonProps, ButtonVariant } from '../types'

export type ButtonActivityIndicatorProps<Variant extends ButtonVariant> = Pick<
  Required<BaseButtonProps<Variant>>,
  'size'
>

export const ButtonActivityIndicator = <Variant extends ButtonVariant>({
  size,
}: ButtonActivityIndicatorProps<Variant>) => {
  const styles = useStyles()

  const sizeBasedStyle = styles[size]

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
