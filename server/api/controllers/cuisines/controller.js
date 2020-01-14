import ZomatoService from "../../integrations/ZomatoService";

export class Controller {
  async getCuisines(req, res) {
    const { cityId } = req.params;

    const list = await ZomatoService.getCuisines(cityId);

    return res.status(200).json(list);
  }
}

export default new Controller();
