import * as express from "express";
import controller from "./controller";

export default express.Router().get("/list/:cityId", controller.getCuisines);
