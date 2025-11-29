import { useState, type FC } from 'react'
import {
  type LayoutChangeEvent,
  type LayoutRectangle,
  View,
  type ViewStyle,
} from 'react-native'

import { makeStyles } from '../../utils/makeStyles'
import { Badge } from '../Badge'

import { BaseButton } from './BaseButton'
import { useBasicButtonStyles } from './styles'
import type { ButtonBadgeProps, ButtonBaseVariant, ButtonProps } from './types'

/**
 * Button component with badge
 * @param size - button size
 * @param shape - button shape
 * @param loading - button loading state
 * @param variant - button variant
 * @param disabled - button disabled state
 * @param iconOnly - button with only Icon
 * @param iconPosition - icon position
 * @param Icon - Tabler icon
 * @param label - button label
 * @param style - external style control for component
 * @param badgeSeverity - badge component severity level
 * @param badgeLabel - text label inside badge
 * @see BaseButton
 */
export const ButtonBadge: FC<
  ButtonProps<ButtonBaseVariant> & ButtonBadgeProps
> = ({ badgeLabel, badgeSeverity, variant = 'primary', ...props }) => {
  const buttonStyles = useBasicButtonStyles()
  const styles = useStyles()
  const [badgeLayout, setBadgeLayout] = useState<LayoutRectangle>()

  const badgeContainerStyle: ViewStyle = {
    position: 'absolute',
    top: badgeLayout ? -Math.round(badgeLayout.height / 2) : 0,
    right: badgeLayout ? -Math.round(badgeLayout.width / 2) : 0,
  }

  const onLayout = (e: LayoutChangeEvent) =>
    setBadgeLayout(e.nativeEvent.layout)

  const badgeCommonProps = {
    severity: badgeSeverity,
    testID: ButtonBadgeTestId.badge,
  }

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.contentContainer,
          props.iconOnly && styles.iconOnlyContainer,
        ]}
      >
        <BaseButton variant={variant} {...props} {...buttonStyles} />

        {badgeLabel ? (
          <Badge
            {...badgeCommonProps}
            style={badgeContainerStyle}
            onLayout={onLayout}
          >
            {badgeLabel}
          </Badge>
        ) : (
          <Badge {...badgeCommonProps} dot style={styles.badgeDot} />
        )}
      </View>
    </View>
  )
}

const useStyles = makeStyles(() => ({
  root: { flexDirection: 'row' },
  contentContainer: { flex: 1 },
  iconOnlyContainer: { flex: 0 },
  badgeDot: { position: 'absolute', top: 0, right: -0.5 },
}))

export const ButtonBadgeTestId = { badge: 'Badge' }
