


const baseHandler = {
    get(target, key) {
        const res = Reflect.get(target, key)

        track(target, key)

        return res
    },
    set(target, key, value) {
        const res = Reflect.set(target, key, value)
        trigger()
        return res 
    }
}


const toProxy = new WeakMap()
const toRaw = new WeakMap()

function reactive(obj) {
    const observed = toProxy.get(obj)

    if(observed) {
        return observed
    }

    if(toRaw.has(obj)) {
        return obj
    }

    const res = new Proxy(obj, baseHandler)

    toProxy.set(obj, res)
    toRaw.set(res, obj)

    return res 
}


let effectStack = []
const targetMap = new Map()

function track(target, key) {
    const effect = effectStack[effectStack.length - 1]
    const targetObj = targetMap.get(target)


    const targetKeySet = targetObj.get(key)

    targetKeySet.push(effect)

}

function effect(fn){
    fn()
}


function trigger(target, key) {
    const depMap = targetMap.get(target)

    const deps = depMap.get(key)

    deps.forEach(dep => dep());

}