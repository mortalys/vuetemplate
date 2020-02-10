// Core testing dependencies
import 'jest'

// classes
import { Auxiliary } from '../../classes/_main'

// models
import { ICustomEnums } from '../../models/_main'

// App Tools
describe('AuxiliaryTools', () => {
  // create a custom object enumerator
  const custom: ICustomEnums = {
    Key: 'Value',
    Not: 'Value x'
  }

  // init object
  const auxToolsTests: Auxiliary = new Auxiliary()

  test('customEnumsSeeker-SUCCESS', () => {
    // what should be index key?
    const key = 'Key'

    // what should be the value found?
    const found = 'Value'

    expect(auxToolsTests.customEnumsSeeker(key, custom)).toEqual(found)
  })

  test('customEnumsSeeker-NOTFOUND', () => {
    // what should be index key?
    const key = 'index'

    // what should be the value found?
    const found = ''

    expect(auxToolsTests.customEnumsSeeker(key, custom)).toEqual(found)
  })
})
