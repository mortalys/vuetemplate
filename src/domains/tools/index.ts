// import domain classes
import { AppTools, AuxiliaryTools, SystemTools } from './classes/_main'

export default class Index {
    static appTools: AppTools = new AppTools();

    static auxTools: AuxiliaryTools = new AuxiliaryTools();

    static systemTools: SystemTools = new SystemTools();
}

export { Index as Tools }
