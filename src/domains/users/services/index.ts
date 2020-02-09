// import classes
import { ServicesDev } from './_main'
import { AppTools } from '../classes/_shared'

// domain models
import { IUser } from '../models/_main'
import { IRequests, envModes } from '../models/_shared'

class Services {
    private _users: IRequests<IUser[]> = new ServicesDev();

    // Shared : Tools Domain
    public appTools: AppTools = new AppTools();

    constructor () {
      switch (this.appTools.mode) {
        case envModes.DEV:
          this._users = new ServicesDev()
          break
      }
    }

    public async API (): Promise<IUser[]> {
      return this._users.getter()
    }
}

export { Services as UsersServices }
