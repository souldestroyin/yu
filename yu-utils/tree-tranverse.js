function preOrderTranverse(root) {
    const stack = []
    const res = []
    let current = root

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current) // 入栈
            res.push(current.val) // 1. 先push root left
            current = current.left
        }

        current = stack.pop().right
    }
}

function midOrder(root) {
    const stack = []
    const res = []
    let current = root

    while(current || stack.length > 0) {
        while(current) {
            stack.push(current)
            current = current.left
        }

        current = stack.pop()
        res.push(current)
        current = current.right
    }
    return res
}


function backOrdertranverse(root) {
    const stack = []
    const res = []
    let current = root

    const visited

    while(current || stack.length > 0) {
        while(current) {
            stack.push(current)
            current = current.left
        }

        let node = stack[stack.length - 1]

        

        current = node.right()

        res.push(node.val)

    }
}




var isValidBST = function(root) {



    function middle(root, arr = []) {

        if(root === null) {
            return arr
        }
        middle(root.left, arr)
        arr.push(root.val)
        middle(root.right, arr)
    }

    const arr = middle(root)

    return arr.every((item, index) => 
        item.val - (arr[index - 1] || 0) > 0
    )
};



var maxDepth = function(root) {
    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

    const step = [[root], []]
    const depth = 0

while(step[0].length + step[1].length) {


    const current = step[depth]
    depth++
    const next = step[depth % 2] = []

    current.forEach(item => {
        item.left && next.push(item.left)
        item.right && next.push(item.right)
    })

}



};