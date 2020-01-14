import ZomatoService from "../../integrations/ZomatoService";

export class Controller {
  async search(req, res) {
    const { cuisinesId } = req.params;
    const { entityId, entityType } = req.body;

    if (!cuisinesId || !entityId || !entityType) {
      return res.status(400).json("Missing required parameters");
    }

    const result = await ZomatoService.search(entityId, entityType, cuisinesId);

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
