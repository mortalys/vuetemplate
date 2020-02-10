import { envModes } from '../models/_main'

// class for generic app developement
export default class App {
  // flag to make use of mock values inside of components
  private modeDev = false;

  public mode: envModes = envModes.PROD;

}
