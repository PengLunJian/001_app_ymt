import apis from '../apis/index';

/**
 *
 * @param {*} url
 * @param {*} options
 */
const request = (url, options) => {
    const data = options.method === 'GET' ?
        options.data : JSON.stringify(options.data);
    return new Promise((resolve, reject) => {
        my.httpRequest({
            url: apis.baseUrl + url,
            method: options.methed,
            data: data,
            timeout: apis.timeout,
            headers: apis.headers,
            dataType: apis.dataType,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            },
            complete: (res) => {
                my.hideLoading();
            }
        });
    });
};
/**
 *
 * @param {*} api
 * @param {*} data
 */
export const get = (api, data = {}) => {
    return request(api.url, {method: 'GET', data: data});
};
/**
 *
 * @param {*} api
 * @param {*} options
 */
export const post = (api, options) => {
    const data = Object.assign(api.params, options);
    return request(api.url, {methed: 'POST', data: data});
};
/**
 *
 * @param params
 */
export const setRequestHeader = (params) => {
    apis.headers = Object.assign(apis.headers, params);
};