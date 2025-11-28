import type { ReactElement, FunctionComponent, ReactNode } from 'react'
import { measureRenders, type MeasureRendersOptions } from 'reassure'

import { ThemeContextProvider } from '../../theme'

const Wrapper: FunctionComponent<{ readonly children: ReactNode }> = ({
  children,
}) => <ThemeContextProvider>{children}</ThemeContextProvider>

export const measureComponentPerformance = (
  ui: ReactElement,
  options?: Omit<MeasureRendersOptions, 'wrapper'>
) => {
  return measureRenders(ui, {
    warmupRuns: 3,
    runs: 10,
    writeFile: true,
    removeOutliers: true,
    ...options,
    wrapper: Wrapper,
  })
}
