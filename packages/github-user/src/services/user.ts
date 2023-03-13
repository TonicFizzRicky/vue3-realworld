import { request } from "../utils/request";
import {IUser} from '../typing/user'

// 获取 github 用户信息
export const getUserInfo = (username: string) => {
  return request<IUser>(`/users/${username}`);
};
