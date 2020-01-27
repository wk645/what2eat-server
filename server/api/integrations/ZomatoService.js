import axios from "axios";

class ZomatoService {
  constructor() {
    this._zomato = axios.create({
      baseURL: "https://developers.zomato.com/api/v2.1",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "user-key": "813160413cfbb14fdc41ae31ab436805"
      }
    });
  }

  async getEstablishments(cityId) {
    try {
      const result = await this._zomato.get(`
        /establishments?city_id=${cityId}`);

      if (result && result.data) {
        return result.data.establishments;
      }

      return [];
    } catch (error) {
      console.log("error getting establishments", error.response.data);
      return [];
    }
  }

  async getCategories() {
    try {
      const result = await this._zomato.get("/categories");

      if (result && result.data) {
        return result.data.categories;
      }

      return [];
    } catch (error) {
      console.log("error getting categories", error.response.data);
      return [];
    }
  }

  async getCuisines(cityId) {
    try {
      const result = await this._zomato.get(`/cuisines?city_id=${cityId}`);

      if (result && result.data) {
        return result.data.cuisines;
      }

      return [];
    } catch (error) {
      console.log("error getting cuisines", error.response.data);
      return [];
    }
  }

  async getMenu(resId) {
    try {
      const result = await this._zomato.get(`/dailymenu?res_id=${resId}`);

      if (result && result.data) {
        return result.data;
      }

      return [];
    } catch (error) {
      console.log("error getting menu", error.response.data);
      return [];
    }
  }

  async search(cuisinesId) {
    // console.log('e e c', entityId, entityType, cuisinesId, typeof entityId, typeof entityType, typeof cuisinesId);
    // https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=1035&sort=rating&order=desc
    try {
      const result = await this._zomato.get(`/search?entity_id=280&entity_type=city&cuisines=${cuisinesId}&sort=rating&order=desc`);
      // console.log('rrr', result.data.restaurants);

      if (result && result.data) {
        return result.data.restaurants;
      }

      return [];
    } catch (error) {
      console.log("error searching", error);
      return [];
    }
  }

  async getRestaurantDetails(resId) {
    try {
      const result = await this._zomato.get(`/restaurant?res_id=${resId}`);

      if (result && result.data) {
        return result.data;
      }

      return [];
    } catch (error) {
      console.log("error getting details for restaurant", error.response.data);
      return [];
    }
  }
}

export default new ZomatoService();
