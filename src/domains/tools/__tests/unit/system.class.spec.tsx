// Core testing dependencies
import 'jest'

// classes
import { System } from '../../classes/_main'

// System Tools
describe('SystemTools', () => {
  // init object
  const SystemToolsTests: System = new System()

  test('systemValid', () => {
    expect(SystemToolsTests.systemValid()).toBeTruthy()
  })

  test('currentSystemInfo', () => {
    const domain = 'localhost/'
    const empty = ''

    expect(SystemToolsTests.currentSystemInfo.domain).toEqual(domain)

    expect(SystemToolsTests.currentSystemInfo.os).toEqual(empty)

    expect(SystemToolsTests.currentSystemInfo.browser).toEqual(empty)
  })
})
