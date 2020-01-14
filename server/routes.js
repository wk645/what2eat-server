import cuisinesRouter from "./api/controllers/cuisines/router";
import categoriesRouter from "./api/controllers/categories/router";
import establishmentsRouter from "./api/controllers/establishments/router";
import menuRouter from "./api/controllers/menu/router";
import searchRouter from "./api/controllers/search/router";

export default function routes(app) {
  const baseURL = "/api/what2eat/v1";

  app.use(`${baseURL}/cuisines`, cuisinesRouter);
  app.use(`${baseURL}/categories`, categoriesRouter);
  app.use(`${baseURL}/establishments`, establishmentsRouter);
  app.use(`${baseURL}/menu`, menuRouter);
  app.use(`${baseURL}/search`, searchRouter);
}
