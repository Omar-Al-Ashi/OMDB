import links from './links'

const httpModule = require("tns-core-modules/http");

export default class http {
    /**
     * gets the primaryDomain and adds the URN and queryStrings if any is available
     * @param URN
     * @param queryString
     * @returns {string|*}
     */
    static urlBuilder(URN, queryString) {
        queryString = queryString || {}
        return this.buildUrl(`${links.primaryDomain}/${URN}`, queryString)
    }

    /**
     * Builds the url with the parameters
     * @param url
     * @param parameters
     * @returns {string}
     */
    static buildUrl(url, parameters) {
        let queryString = "";
        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                const value = parameters[key];
                queryString += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
            }
        }
        if (queryString.length > 0) {
            queryString = queryString.substring(0, queryString.length - 1); //chop off last "&"
            url = url + "?" + queryString;
        }
        return url;
    }

    /**
     * Get API method with headers
     * @param url
     * @param headers
     * @returns {Promise<Response>}
     * @constructor
     */
    static GET(url, headers) {
        headers = headers || {};
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Requested-with": "XMLHttpRequest",
                ...headers,
            },
        })
    }

    /**
     * Post API method with data
     * @param url
     * @param headers
     * @param body
     * @returns {Promise<Response>}
     * @constructor
     */
    static POST(url, headers, body = {}) {
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Requested-with": "XMLHttpRequest",
                ...headers
            },
            body: JSON.stringify(body)
        })
    }

    /**
     * Post file API method
     * @param url
     * @param headers
     * @param body
     * @returns {Promise<Response>}
     * @constructor
     */
    static POSTFILE(url, headers, body = {}) {
        return fetch(url, {
            method: 'POST',
            headers: {
                "Requested-with": "XMLHttpRequest",
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(body)
        })
    }

    /**
     * Put API method
     * @param url
     * @param headers
     * @param body
     * @returns {Promise<Response>}
     * @constructor
     */
    static PUT(url, headers, body = {}) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Requested-with": "XMLHttpRequest",
                ...headers
            },
            body: JSON.stringify(body)
        })
    }

    /**
     * Delete API method
     * @param url
     * @param headers
     * @returns {Promise<Response>}
     * @constructor
     */
    static DELETE(url, headers) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Requested-with": "XMLHttpRequest",
                ...headers
            },
        })
    }
}

