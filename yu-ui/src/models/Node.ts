type NodeData = {
    type: string,
    x: number,
    y: number,
    w: number,
    h: number,
    children: Array<Node>
}

export default class Node {
    private nodeData: NodeData

    constructor(type: string, x: number, y: number, w: number, h: number) {
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
}