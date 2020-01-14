import ZomatoService from "../../integrations/ZomatoService";

export class Controller {
  async getCategories(req, res) {
    const categories = await ZomatoService.getCategories();

    return res.status(200).json(categories);
  }

  async getEstablishments(req, res) {
    const { cityId } = req.params;

    const establishments = await ZomatoService.getEstablishments(cityId);

    return res.status(200).json(establishments);
  }
}

export default new Controller();
