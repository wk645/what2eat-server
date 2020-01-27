import ZomatoService from "../../integrations/ZomatoService";
import ZomatoCodes from "../../../common/zomatoCodes.json";
// console.log('ZZZ', ZomatoCodes.67.toString());

export class Controller {
  async search(req, res) {
    const { cuisinesId } = req.params;
    // const { entityId, entityType } = req.query;

    console.log('params', cuisinesId);
    // const stringedId = cuisinesId.toString();
    // console.log('sss', stringedId);

    if (!cuisinesId) {
      return res.status(400).json("Missing required parameters");
    }

    // const entityId = ZomatoCodes.stringedId;
    // console.log('CCC eee', entityId);
    // const entityType = 'city';

    const result = await ZomatoService.search(cuisinesId);

    console.log('result', result);

    let customRestaurant = {};
    const restaurants = [];

    for (const restaurant of result) {
      const {
        id,
        name,
        location,
        cuisines,
        timings,
        average_cost_for_two,
        user_rating: { aggregate_rating, rating_text },
        // photos,
        menu_url,
        phone_numbers
      } = restaurant.restaurant;
      customRestaurant = Object.assign(customRestaurant, {
        id,
        name,
        location,
        cuisines,
        timings,
        averageCost: average_cost_for_two,
        rating: {
          score: aggregate_rating,
          text: rating_text
        },
        // photos,
        menuUrl: menu_url,
        phone: phone_numbers
      });

      restaurants.push(customRestaurant);
      customRestaurant = {};
    }

    return res.status(200).json(restaurants);
  }
}

export default new Controller();
