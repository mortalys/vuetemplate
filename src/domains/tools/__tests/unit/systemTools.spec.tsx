// Core testing dependencies
import 'jest'

// classes
import { SystemTools } from './../../classes/_main'

// System Tools
describe('SystemTools', () => {
  // init object
  const SystemToolsTests: SystemTools = new SystemTools()

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
