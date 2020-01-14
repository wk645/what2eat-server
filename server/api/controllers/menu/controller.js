import ZomatoService from "../../integrations/ZomatoService";

export class Controller {
  async getMenu(req, res) {
    const { resId } = req.params;

    const menu = await ZomatoService.getMenu(resId);

    return res.status(200).json(menu);
  }
}

export default new Controller();
