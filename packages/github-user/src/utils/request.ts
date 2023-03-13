import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export async function request<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  return (await instance(url, options))?.data;
}
