import { environment } from "./../environments/environment";

let URL_API = "http://localhost:8080/api/url"

if (!environment.production) {
    URL_API = "https://url-shortenerr-api.herokuapp.com/api/url"
    console.log("Running in mode prod: ", URL_API)
} else {
    URL_API = "http://localhost:8080/api/url"
    console.log("Running in mode dev: ", URL_API)
}

export { URL_API }