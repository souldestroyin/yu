class TaskQueue {
    constructor(){
        this.queue = []
    }

    addTask(task, timestamp) {
        this.queue.push({task, timestamp})
    }
}