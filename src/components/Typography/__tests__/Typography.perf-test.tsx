import { measureComponentPerformance } from '../../../utils/__tests__/perf-utils'
import { Anchor } from '../Anchor'
import { Body } from '../Body'
import { Caption } from '../Caption'
import { Service } from '../Service'
import { Subtitle } from '../Subtitle'
import { Title } from '../Title'

describe('Typography performance', () => {
  describe('Anchor', () => {
    test('default', async () => {
      await measureComponentPerformance(
        <Anchor onPress={jest.fn()}>Anchor</Anchor>
      )
    })
  })

  describe('Body', () => {
    test('default', async () => {
      await measureComponentPerformance(<Body>Body</Body>)
    })
  })

  describe('Caption', () => {
    test('default', async () => {
      await measureComponentPerformance(<Caption>Caption</Caption>)
    })
  })

  describe('Service', () => {
    test('default', async () => {
      await measureComponentPerformance(<Service>Service</Service>)
    })
  })

  describe('Subtitle', () => {
    test('default', async () => {
      await measureComponentPerformance(<Subtitle>Subtitle</Subtitle>)
    })
  })

  describe('Title', () => {
    test('default', async () => {
      await measureComponentPerformance(<Title level='h1'>Title</Title>)
    })
  })
})
