import cookieHelper from "./getCookieData";

export const __user = (indexKey = false) => {
    if (indexKey === false) {
        return cookieHelper.getCookie("authUser") ? true : false;
    }
    const obj = JSON.parse(cookieHelper.getCookie("authUser"))
    return obj[indexKey]
}