// interface types
import { ICustomEnums } from '../models/_main'

export default class AuxiliaryTools {
  // method to find values by key in objects
  public customEnumsSeeker (seeker: string, objCollection: ICustomEnums): string {
    // init the object to return empty string
    let strFound = ''

    // where to find ?
    const matchKey: string = seeker

    // loop all available OS
    Object.keys(objCollection).forEach((key: string) => {
      // match key to get value from object in the string
      if (matchKey.indexOf(key) !== -1) strFound = objCollection[key]
    })

    return strFound
  }
}
