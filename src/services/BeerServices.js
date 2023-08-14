import api from "./AppServices";

const beers_url = "beers";
class BeerServices {
    GetBeers = async (params) => {
        const request = await api.get(
            beers_url, params
        );
        return request;
    };
}

const beer_services = new BeerServices();
export default beer_services;
