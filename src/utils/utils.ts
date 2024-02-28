import { ApiInterface } from "../customTypes/api-types.ts";

export function makeUrl(baseUrl: string, endpoint: string) {
    return baseUrl + endpoint;
}

export function checkIsLogginIn() {
    return !!localStorage.getItem('accessToken');
}
//Record<number, string>

/**
 * returns an object looks like {
 *     statusCode: string // where string is url to next page, message, etc
 * }
 * @param {ApiInterface} object - The object with current page data
 * @param {number} targetIndex - The target index, which select necessary info from the original array of data.
 *
 * Example:
 * responseCodes: {
 *             200: ['/main', 'Ok'],
 *             400: ['/result/error-login', 'request error'],
 *             429: ['/result/error-login', 'too many requests'],
 *             500: ['/result/error-login', 'server error'],
 *         }, targetIndex=0
 *          ==>
 *
 *          newObject = {
 *              200: '/main',
 *             400: '/result/error-login',
 *             429: '/result/error-login',
 *             500: '/result/error-login',
 *          }
 */
export function getPureMap(object: ApiInterface, targetIndex: number) {
    return Object.keys(object.responseCodes).reduce((acc: Record<string, string>, code) => {
        acc[code] = object.responseCodes[+code][targetIndex]
        return acc;
    }, {})
}
