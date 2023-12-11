import { setupInterceptorsTo } from "./interceptors";
import axios from "axios";

const axiosCreate = (config) => axios.create(config);

export const request = setupInterceptorsTo(
  axiosCreate({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
);

export const requestWithoutAuth = (config = {}) =>
  setupInterceptorsTo(
    axiosCreate({
      // headers: {
      //   "user-uuid": "fe0e2805-1dc3-41f5-bbd8-43f550949d11",
      // },
      ...config,
    }),
    false
  );
