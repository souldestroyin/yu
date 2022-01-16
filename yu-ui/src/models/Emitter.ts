import {Observable, Subscriber} from 'rxjs'

export default class Emitter<Topic extends number> {
    observers: Array<any>
    constructor() {
        this.observers = new Array()
    }

    addObserver(topic: Topic, ) {

    }

    removeObserver() {

    }
}