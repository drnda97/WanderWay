import Cookies from "universal-cookie";
const cookies = new Cookies();
export const isAuthenticated = cookies.get("token");
