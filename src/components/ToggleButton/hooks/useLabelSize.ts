import { useMemo } from 'react'

import { makeStyles } from '../../../utils/makeStyles'
import type { ToggleButtonProps } from '../ToggleButton'

export const useLabelSize = (size: ToggleButtonProps['size'] = 'base') => {
  const styles = useStyles()

  return useMemo(() => {
    return [styles.common, styles[size]]
  }, [size, styles])
}

const useStyles = makeStyles(({ typography }) => ({
  common: {
    fontWeight: '600',
    includeFontPadding: false,
    verticalAlign: 'middle',
  },
  xlarge: { fontSize: typography.Size['text-2xl'] },
  large: { fontSize: typography.Size['text-xl'] },
  base: { fontSize: typography.Size['text-base'] },
  small: { fontSize: typography.Size['text-sm'] },
}))
