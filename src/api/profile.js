import request from "@/utils/request";

export function getProfile(data) {
  return request({
    url: "/profile",
    method: "post",
    data
  });
}
