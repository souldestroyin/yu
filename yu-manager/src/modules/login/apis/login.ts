import request from '@/tools/request'

export function apiLogin(sid: string, account: string, password: string) {
    return request({
        url: '/api/home/user/login',
        method: 'post',
        data: {
            sid,
            account,
            password,
            state: '',
            fromPdk: 0
        }
    })
}