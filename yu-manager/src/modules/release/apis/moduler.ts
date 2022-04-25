import request from '@/tools/request'

const baseUrl = '/local/releasePage'

export function getModuleList() {
    return request({
        url: baseUrl + '/getModuleList',
        method: 'get',
    })
}

export function createModule(title: string, name: string) {
    return request({
        url: baseUrl + '/createModule',
        method: 'post',
        data: {
            title,
            name
        }
    })
}


export function updateModule(moduleId: number, title: string, name: string) {
    return request({
        url: baseUrl + '/updateModule',
        method: 'post',
        data: {
            moduleId,
            title,
            name
        }
    })
}

export function deleteModule(moduleId: number) {
    return request({
        url: baseUrl + '/delModule',
        method: 'post',
        data: {
            moduleId

        }
    })
}