import { HTTP } from './RequestType'

function request() {
    var path = `delay/5`
    return HTTP.get(path)
}

export default {
    request
}