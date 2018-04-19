function fetchRequest(method, url, body, hasCookies) {
    method = method.toUpperCase();
    if (method === 'GET') {
        if (body) { 
            let paramsArray = [];
            //get请求拼接参数 
            //Get request splicing parameters
            Object.keys(body).forEach(key => paramsArray.push(key + '=' + body[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    let fetchParams = {
        method,
        // headers:{
        //     'Content-Type': 'application/json',
        //     'Accept':'application/json',
        // },
        body: body,
    };
    if (hasCookies) {
        fetchParams = {
            ...fetchParams,
            credentials: 'include',
        }
    }

    return fetch(url, fetchParams).then((res) => {
        if (res.status === 401) {
            return Promise.reject('Unauthorized');
        } else {
            return res.json();
        }
    })
}
const fetchGet = (url, body, hasCookies) => fetchRequest('GET', url, body, hasCookies);

export {
    fetchGet,
};