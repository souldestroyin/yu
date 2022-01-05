export default class Node {
    private type: string

    constructor(type: string) {
        this.type = type
    }

    public getType() {
        return this.type
    }
}