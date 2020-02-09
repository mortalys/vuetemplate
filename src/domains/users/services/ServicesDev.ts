// core global libraries
// import axios, { AxiosResponse } from 'axios'

// domain models
import { IUser } from '../models/_main';

import {   
  IRequests,
  IAPI
} from '../models/_shared'


// domain logic
class Services implements IRequests<IUser[]> {
    // server payload
    private _usersData: IUser[] = [
      {
        'id': 1,
        'name': "Test",
        'username': "Admin"
      },
      {
        'id': 2,
        'name': "User",
        'username': "Normal"
      }      
    ];

    // lets assume default error - front end
    private _APIResponse: IAPI<IUser> = {
      result: 1,
      __error: '',
      data: this._usersData
    }

    // Mock Dev
    public async getter (): Promise<IUser[]> {
      return new Promise(resolve => { resolve(this._APIResponse.data) })
    }


}

export { Services as ServicesDev }
