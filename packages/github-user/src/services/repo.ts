import {request} from '../utils/request'
import type {IRepo} from '../typing/repo'

/**获取仓库信息 */

export const getRepoInfo = (username:string) => {
    return request<IRepo[]>(`/users/${username}/repos`)
}