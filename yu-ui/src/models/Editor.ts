import StateMachine from './StateMachine';
import { States, Actions } from '../types/editor.types';
import Node from './Node';
export default class Editor extends StateMachine<States, Actions> {
    root: Node
    constructor() {
        super(States.Start)
        this.root = new Node('root', 0, 0, 800, 800)

    }

    public getRoot() {
        return this.root
    }
}