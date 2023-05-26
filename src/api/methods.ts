import { getLocal } from "../services/local-storage";
import { UserAPIType } from "./auth-api";

export const getMethod = async <T>(url: string) => {
  const user = getLocal<UserAPIType>("user");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.accessToken}`,
    },
  }).then<T>((data) => data.json());

  return response;
};

export const postMethod = async <T>(url: string) => {
  const user = getLocal<UserAPIType>("user");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.accessToken}`,
    },
  }).then<T>((data) => data.json());

  return response;
};
