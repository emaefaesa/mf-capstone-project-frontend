import catsService from "../../services/cats.service"

const LoaderCatsPage = async () => {
    const cats = await catsService.getAllCats();
    return cats;

}

export default LoaderCatsPage