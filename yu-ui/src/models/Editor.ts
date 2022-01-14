import StateMachine from './StateMachine';
import { States, Actions, Meta } from '../types/editor.types';
import Node from './Node';
export default class Editor extends StateMachine<States, Actions> {
    private root: Node
    private addingMeta?: Meta

    constructor() {
        super(States.Start)
        this.root = new Node('root', 0, 0, 800, 800)

        this.register(States.Start, States.PlacingComponent, Actions.StartAddComponent, meta => {
            this.addingMeta = meta
        })


        this.register(States.PlacingComponent, States.AddingComponent, Actions.EvtDrop, () => {
            const node = new Node(
                this.addingMeta!.type,

            )
        })

    }

    public getRoot() {
        return this.root
    }
}