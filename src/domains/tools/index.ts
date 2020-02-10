// import domain classes
import { App, Auxiliary, System } from './classes/_main'

export default class Index {
    public app: App = new App();

    public aux: Auxiliary = new Auxiliary();

    public system: System = new System();
}

export { Index as ToolsDomain }
