export type ModulerType = {
    moduleId: number
    title: string
    name: string
}

export default class ModulerList {
    list: Array<ModulerType> = []

    getList() {
        return this.list
    }


    isEmpty() {
        return this.list.length === 0
    }


    getDefaultModuleId() {
        if (this.isEmpty()) {
            return 0
        }
        return this.list[0].moduleId
    }

    fetchList() {
        this.list = [
            {
                moduleId: 1,
                title: '订单',
                name: 'order'
            },
            {
                moduleId: 2,
                title: '仓库',
                name: 'warehouse'
            }
        ]
    }

    update(moduleId: number, title: string) {
        const item = this.list.find(o => o.moduleId === moduleId)

        if (item) {
            item.title = title
        }

    }

    create(title: string, name: string) {
        const item = {
            moduleId: this.list[this.list.length - 1].moduleId++,
            title,
            name
        }

        this.list.push(item)
    }

    delete(moduleId: number) {
        const index = this.list.findIndex(o => o.moduleId === moduleId)

        if (index >= 0) {
            this.list.splice(index, 1)
        }
    }
}