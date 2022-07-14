const BASE_URL = 'http://localhost:3001/api';
const HEADER = {headers: {'Content-Type': 'application/json'}};

const request = {
    /**
     * @param {string} url 
     * @returns {Promise<any>}
     */
    get: (url) => {
        return fetch(BASE_URL + url, {
            ...HEADER
        }).then(res => res.json())
    },

    /**
     * @param {string} url 
     * @param {object} body
     * @returns {Promise<any>}
     */
    post: (url, body) => {
        return fetch(BASE_URL + url, {
            ...HEADER,
            method: 'post',
            body: JSON.stringify(body)
        }).then(res => res.json())
    },

    /**
     * @param {string} url 
     * @param {object} body
     * @returns {Promise<any>}
     */
    patch: (url, body) => {
        return fetch(BASE_URL + url, {
            ...HEADER,
            method: 'patch',
            body: JSON.stringify(body)
        }).then(res => res.json())
    },

    /**
     * @param {string} url
     * @returns {Promise<any>}
     */
    delete: (url) => {
        return fetch(BASE_URL + url, {
            ...HEADER,
            method: 'delete',
        }).then(res => res.json())
    }
}

export {request}