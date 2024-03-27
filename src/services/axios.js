import axios from 'axios';

class AxiosConfig {
    constructor(path) {
        this.axios = axios.create(
            {
                baseURL: `http://localhost:5005/api/${path}`
            }
        )
    }
}

export default AxiosConfig;