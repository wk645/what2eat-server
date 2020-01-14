import Server from "./server";
import routes from "./routes";

const port = process.env.PORT || "8000";

export default new Server().router(routes).listen(port);
