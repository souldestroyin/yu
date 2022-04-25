import request from '@/tools/request'

const baseUrl = '/local/releasePage'

/**1.页面 2.接口 3.定时任务  */
type ResourceType = 1 | 2 | 3


export function getResourceList(moduleId: number, resourceType: ResourceType) {
    return request({
        url: baseUrl + '/queryResourceList',
        method: 'get',
        params: {
            moduleId,
            resourceType
        }
    })
}

/**
 * 
 * @param moduleId 模块Id
 * @param resourceType 资源类型
 * @param resourceTitle 资源标题 
 * @param resourcePath 资源信息 type为1,2 前端命名展示为路径, type为3命名展示为名称
 * @returns 
 */
export function createResource(moduleId: number, resourceType: ResourceType, resourceTitle: string, resourcePath: string) {
    return request({
        url: baseUrl + '/createResource',
        method: 'post',
        data: {
            moduleId,
            resourceType,
            resourceTitle,
            resourcePath
        }
    })
}


export function updateResource(moduleId: number, resourceId: number, resourceType: ResourceType, resourceTitle: string, resourcePath: string) {
    return request({
        url: baseUrl + '/updateResource',
        method: 'post',
        data: {
            moduleId,
            resourceId,
            resourceType,
            resourceTitle,
            resourcePath
        }
    })
}

export function deleteModule(moduleId: number, resourceId: number) {
    return request({
        url: baseUrl + '/delResource',
        method: 'post',
        data: {
            moduleId,
            resourceId
        }
    })
}
