import type { ComponentType, FC } from 'react'
import { SvgUri, SvgXml, type SvgProps } from 'react-native-svg'

export type SvgSource =
  | { uri: string }
  | { xml: string }
  | ComponentType<SvgProps>

interface SvgUniversalProps extends SvgProps {
  /** Источник SVG */
  readonly source: SvgSource
}

/**
 * Компонент для рендера SVG из разных источников
 * Поддерживает:
 * - uri
 * - xml
 * - ComponentType<SvgProps>
 * @example
 * <SvgUniversal source={{ uri: 'https://example.com/icon.svg' }} />
 * <SvgUniversal source={{ xml: '<svg><path d="M1 1h1v1H1z" /></svg>' }} />
 * <SvgUniversal source={IconUser} />
 */
export const SvgUniversal: FC<SvgUniversalProps> = ({ source, ...rest }) => {
  if ('uri' in source) {
    return <SvgUri testID={SvgUniversalTestId.uri} uri={source.uri} {...rest} />
  }

  if ('xml' in source) {
    return <SvgXml testID={SvgUniversalTestId.xml} xml={source.xml} {...rest} />
  }

  const Component = source

  return <Component testID={SvgUniversalTestId.component} {...rest} />
}

export const SvgUniversalTestId = {
  component: 'SvgUniversalComponent',
  uri: 'SvgUniversalUri',
  xml: 'SvgUniversalXml',
}
