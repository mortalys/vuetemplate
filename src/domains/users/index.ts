// import classes
import { Users } from './classes/_main'
import { ToolsDomain } from './classes/_shared'

export default class Index {
    public domainTools: ToolsDomain = new ToolsDomain();
    
    users: Users = new Users();        
}

export { Index as UsersDomain };
