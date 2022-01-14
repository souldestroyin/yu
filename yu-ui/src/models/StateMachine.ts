type StateTransferFunction = (...args: Array<any>) => void

/**
 * S: 状态
 * A: Action
 */
export default class StateMachine<S extends number, A extends number> {
    s: S // 当前状态
    table: Map<S, Map<A, [StateTransferFunction, S]>>  // 状态映射表
    constructor(initialState: S) {
        this.s = initialState
        this.table = new Map()
    }

    register(from: S, to: S, action: A, fn: StateTransferFunction) {
        if (!this.table.has(from)) {
            this.table.set(from, new Map())
        }

        this.table.get(from)!.set(action, [fn, to])
    }

    dispatch(action: A, ...data: Array<any>) {
        const adjTable = this.table.get(this.s)
        if (!adjTable) {
            console.log(`当前状态${this.s}不存在`);
            return false
        }

        if (!adjTable.has(action)) {
            console.log(`当前方法${action}不存在`);
            return false
        }

        const [fn, nextS] = adjTable.get(action)!

        fn(...data)

        this.s = nextS

        // action 0 是自动action
        while (this.dispatch(0 as A, ...data));

        return true
    }
}