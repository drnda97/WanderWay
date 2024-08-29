import Cookies from "universal-cookie";
import Repository, { apiUrl } from "@/api/repository/Repository.js";

const cookies = new Cookies();
let refresh_token = cookies.get("refresh_token");
let token = cookies.get("token");
let expToken = new Date();
let expRefreshToken = new Date();

export const getRefreshToken = () => {
  if (refresh_token) {
    return cookies.get("refresh_token");
  } else {
    return null;
  }
};

export const getTokenData = () => {
  if (!token || !refresh_token) {
    return null;
  }
  let base64Url = token ? token.split(".")[1] : refresh_token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export const getDataFromToken = (token) => {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export const removeCookies = () => {
  cookies.remove("token", { path: "/", domain: window.location.hostname });
  cookies.remove("refresh_token", {
    path: "/",
    domain: window.location.hostname,
  });
};

export const setAuthorizationCookie = (newToken) => {
  expToken.setTime(getDataFromToken(newToken).exp * 1000);
  cookies.set("authorization", `${newToken}`, {
    path: "/",
    domain: window.location.hostname,
    expires: expToken,
  });
};

export const setCookies = (tokens) => {
  expToken.setTime(getDataFromToken(tokens.token).exp * 1000);
  expRefreshToken.setTime(getDataFromToken(tokens.refreshToken).exp * 1000);

  cookies.set("token", `${tokens.token}`, {
    path: "/",
    domain: window.location.hostname,
    expires: expToken,
  });
  cookies.set("refresh_token", `${tokens.refreshToken}`, {
    path: "/",
    domain: window.location.hostname,
    expires: expRefreshToken,
  });
};
export const tokenWillExpireIn = () => {
  if (!token) return null;
  const tokenData = getTokenData();
  const now = new Date();
  const exp = new Date(tokenData.exp * 1000);
  const diff = exp.getTime() - now.getTime() - 100000;
  console.warn("token will expire in", diff);
  return diff;
};

export const setTimer = () => {
  setTimeout(() => {
    getNewToken();
  }, tokenWillExpireIn());
};

export const getNewToken = async () => {
  if (!refresh_token) return null;
  const response = await Repository.post(
    `${apiUrl}/shop/auth/reset-token?token=${refresh_token}`
  );
  if (response.status === 200) {
    setCookies(response.data?.og_token, response.data?.og_refresh_token);
  }
};

export const getCookies = () => {
  if (token) {
    return cookies.get("og_token");
  } else {
    return null;
  }
};
