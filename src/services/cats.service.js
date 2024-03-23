import AxiosConfig from "./axios"

class CatsService extends AxiosConfig {
    constructor() {
        super('cats')
    }

    async getAllCats() {
        const response = await this.axios.get('list')
        return response.data;
    }
}

export default new CatsService();