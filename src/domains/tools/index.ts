// import domain classes
import { App, Auxiliary, System, Logger } from './classes/_main'

export default class Index {
    public app: App = new App();

    public aux: Auxiliary = new Auxiliary();

    public system: System = new System();

    public logger: Logger = new Logger();
}

export { Index as ToolsDomain }
