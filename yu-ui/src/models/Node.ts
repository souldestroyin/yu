import Emitter from "./Emitter"

type NodeData = {
    type: string,
    x: number,
    y: number,
    w: number,
    h: number,
    children: Array<Node>
}

export default class Node extends Emitter<number> {
    private nodeData: NodeData

    constructor(type: string, x: number, y: number, w: number, h: number) {
        super()
        this.nodeData = {
            type,
            x,
            y,
            w,
            h,
            children: []
        }
    }

    public getType() {
        return this.nodeData.type
    }

    public getChildren() {
        return this.nodeData.children
    }

    public getW() {
        return this.nodeData.w
    }

    public getH() {
        return this.nodeData.h
    }

    public add(child: Node) {
        console.log('add');

        this.nodeData.children.push(child)
        console.log(this.nodeData);

    }
}