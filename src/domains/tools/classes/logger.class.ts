// class to track trace for debugging
export default class Logger {
  
    static trace: string = "";

    public componentMounted(text: string | undefined): void {
        if (!this.isValidText(text)) return;

        Logger.trace += `[[ Component Init: ${ text } ]]->`;
    }

    public storeMethodInit(store: string, method: string): void {
        if (!this.isValidText(store) || !this.isValidText(method)) return;

        Logger.trace += `[[ Store: ${ store } ::  ${ method } ]]->`;    
    }  

    public serviceMethodInit(service: string, method: string): void {
        if (!this.isValidText(service) || !this.isValidText(method)) return;

        Logger.trace += `[[ Service: ${ service } ::  ${ method } ]]->`;    
    }   

    public methodInit(text: string): void {
        if (!this.isValidText(text)) return;

        Logger.trace += `[ ${ text }() ]->`;
    }

    public methodAdd(text: string, values?: string): void {
        if (!this.isValidText(text)) return;

        Logger.trace += `( ${ text } - ${ values } )->`;
    }

    public methodError(text: string): void {
        if (!this.isValidText(text)) return;

        Logger.trace += `(( ${ text } ))`;

        this.print();
    }

    public print(): void {
        console.log(Logger.trace);
    }

    private isValidText(text: string | undefined): boolean {
        if (text === typeof undefined) return false;

        return true;
    }
}

