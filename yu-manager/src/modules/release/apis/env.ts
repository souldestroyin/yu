import request from '@/tools/request'

const baseUrl = '/local/releasePage'

/**
 * 
 * @param envId 环境id，如果为空 则查询所有环境
 * @returns 
 */
export function getEnvList(envId: number | undefined) {
    return request({
        url: baseUrl + '/getEnvList',
        method: 'get',
        params: {
            envId
        }
    })
}

export function createEnv(title: string, name: string) {
    return request({
        url: baseUrl + '/createEnv',
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