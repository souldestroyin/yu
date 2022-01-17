import StateMachine from './StateMachine';
import { States, Actions, Meta, EditorEvents } from '../types/editor.types';
import Node from './Node';
export default class Editor extends StateMachine<States, Actions> {
    private root: Node
    private addingMeta?: Meta
    private addingVector!: [number, number]

    constructor() {
        super(States.Start)
        this.root = new Node('root', 0, 0, 800, 800)

        this.register(States.Start, States.PlacingComponent, Actions.StartAddComponent, meta => {
            this.addingMeta = meta
        })

        this.register(States.PlacingComponent, States.PlacingComponent, Actions.EvtDrag, (vec) => {
            this.addingVector = vec
        })


        this.register(States.PlacingComponent, States.Start, Actions.EvtDrop, () => {
            const node = new Node(
                this.addingMeta!.type,
                this.addingVector[0] - this.addingMeta!.w / 2 - 100,
                this.addingVector[1] - this.addingMeta!.h / 2,
                this.addingMeta!.w,
                this.addingMeta!.h
            )

            this.root.add(node)

            this.root.emit(EditorEvents.NodeChildrenUpdated)
        })

    }

    public getRoot() {
        return this.root
    }
}