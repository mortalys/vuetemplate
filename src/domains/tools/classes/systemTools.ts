// interface types
import { ISystemInfo, ICustomEnums } from '../models/_main'

// external/shared
import { AuxiliaryTools } from './_main'

export default class SystemTools {
  // set the available OS
  static OS_ENUM: ICustomEnums = {
    'Windows NT 10.0': 'Windows 10',
    'Windows NT 6.2': 'Windows 8',
    'Windows NT 6.1': 'Windows 7',
    'Windows NT 6.0': 'Windows Vista',
    'Windows NT 5.1': 'Windows XP',
    'Windows NT 5.0': 'Windows 2000',
    Mac: 'Mac/iOS',
    X11: 'UNIX',
    Linux: 'Linux'
  };

  // set the available BROWSERS
  // Order is important ( ex: Chrome/vX Safari/vX Edge/vX -> returns "Edge" )
  static BROWSER_ENUM: ICustomEnums = {
    Opera: 'Opera',
    OPR: 'Opera',
    Firefox: 'Firefox',
    Safari: 'Safari',
    Chrome: 'Chrome',
    MSIE: 'Internet Explorer',
    Edge: 'Edge'
  };

  // public vars
  public currentSystemInfo: ISystemInfo = {
    os: '0',
    domain: '0',
    browser: '0'
  };

  public auxTools: AuxiliaryTools = new AuxiliaryTools();

  constructor () {
    this.systemDetection()
  }

  /*
    Validate current system status
    return boolean
    */
  public systemValid (): boolean {
    // check for OS
    if (this.currentSystemInfo.os === undefined) return false

    // check for browser
    if (this.currentSystemInfo.browser === undefined) return false

    // check for domain
    if (this.currentSystemInfo.domain === undefined) return false

    return true
  }

  /*
    Gather information from the current client system ( Browser, OS )
    Shared modules @tools
    return ISystemInfo
    */
  private systemDetection (): ISystemInfo {
    this.currentSystemInfo = {
      // set OS
      os: this.auxTools.customEnumsSeeker(window.navigator.userAgent, SystemTools.OS_ENUM),
      // set Browser
      browser: this.auxTools.customEnumsSeeker(
        window.navigator.userAgent,
        SystemTools.BROWSER_ENUM
      ),
      // set Domain : Format  HTTP://domain/path - removing file
      domain: window.location.hostname + window.location.pathname.replace(/[^/]*$/, '')
    }

    return this.currentSystemInfo
  }
}
