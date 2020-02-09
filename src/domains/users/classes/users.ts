import { IUser } from '../models/_main'
import { UsersServices } from '../services/_main'

// class for generic app developement
export default class Users {

  data: IUser[] = [];

  services: UsersServices = new UsersServices();

  async userInfoList(): Promise<boolean>
  {    
   
      this.data = await this.services.API();

      if (this.data.length == 0) return false;
      
      /*
      this.data.forEach((user: IUser) =>
      {        
        console.log(`id: ${user.id} - Name: ${user.name} - Username: ${user.username}`);
      }); 
      */

      return true;
  }

}
