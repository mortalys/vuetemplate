// import classes
import { Users } from './classes/_main'
import { AppTools, AuxiliaryTools, SystemTools } from './classes/_shared'

export default class Index {
    // appTools: AppTools = new AppTools();

    // auxTools: AuxiliaryTools = new AuxiliaryTools();

    // systemTools: SystemTools = new SystemTools();
    
    users: Users = new Users();        
}

export { Index as UsersDomain };
