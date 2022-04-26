/**1.页面 2.接口 3.定时任务  */
export type ResourceType = 1 | 2 | 3

type ResourceDataType = {
    moduleId: number,
    resourceId: number,
    resourceType: ResourceType,
    resourceTitle: string,
    resourcePath: string
}

export default class ResourceList {
    moduleId: number
    resourceType: number

    list: Array<ResourceDataType> = []


    constructor(moduleId: number, resourceType: ResourceType) {
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