import http from './http'
import links from "./links";
import env from "~/env";

export default {

    getMostPopularMovies(headers, callback) {
        console.log("url", http.urlBuilder(`${links.primaryDomain}${env.key}`), headers)
        http.GET(`${links.primaryDomain}${env.key}`)
            .then(response => {
                if (response.status === 200) {
                    let responseData = JSON.parse(response._bodyText);
                    callback(responseData)
                } else if (response.status === 401) {
                    callback()
                } else {
                }

            })
            .catch((error) => {
                callback(error)
            })
    },
}
