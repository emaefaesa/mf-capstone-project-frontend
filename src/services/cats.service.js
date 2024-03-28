import AxiosConfig from "./axios"

class CatsService extends AxiosConfig {
    constructor() {
        super('cats')
    }

    async getAllCats() {
        const response = await this.axios.get('/list');
        return response.data;
    }

    async createCat(data) {
        data.location = {
            type: 'Point',
            coordinates: [12, -43]
        }

        const response = await this.axios.post('/create', data);
        return response.data;
    }
}

export default new CatsService();