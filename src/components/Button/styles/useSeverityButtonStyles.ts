import type { ButtonSeverityProps } from '../types'

import { useDangerButtonStyles } from './useDangerButtonStyles'
import { useInfoButtonStyles } from './useInfoButtonStyles'
import { useSuccessButtonStyles } from './useSuccessButtonStyles'
import { useWarningButtonStyles } from './useWarningButtonStyles'

export const useSeverityButtonStyles = (
  severity: ButtonSeverityProps['severity']
) => {
  const dangerButtonStyles = useDangerButtonStyles()
  const warningButtonStyles = useWarningButtonStyles()
  const infoButtonStyles = useInfoButtonStyles()
  const successButtonStyles = useSuccessButtonStyles()

  switch (severity) {
    case 'danger':
      return dangerButtonStyles

    case 'warning':
      return warningButtonStyles

    case 'info':
      return infoButtonStyles

    case 'success':
      return successButtonStyles
  }
}
