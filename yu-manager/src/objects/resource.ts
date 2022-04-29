/**1.页面 2.接口 3.定时任务  */
export type ResourceTypeType = 1 | 2 | 3

export type RourceFormType = {
    moduleId: number,
    resourceType: ResourceTypeType,
    resourceTitle: string,
    resourcePath: string
}

export type ResourceType = RourceFormType & {
    resourceId: number,
}

export default class ResourceList {
    moduleId: number
    resourceType: number

    list: Array<ResourceType> = []


    constructor(moduleId: number, resourceType: ResourceTypeType) {
        this.moduleId = moduleId
        this.resourceType = resourceType
    }

    isEmpty() {
        return this.list.length === 0
    }

    fetchList() {
        this.list = [{
            moduleId: this.moduleId,
            resourceId: 1,
            resourceType: 1,
            resourceTitle: "订单页面1",
            resourcePath: "order/page1"
        },
        {
            moduleId: this.moduleId,
            resourceId: 2,
            resourceType: 1,
            resourceTitle: "订单页面2",
            resourcePath: "order/page2"
        }]
    }


}