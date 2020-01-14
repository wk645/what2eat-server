import express from "express";
import controller from "../categories/controller";

export default express
  .Router()
  .get("/list/:cityId", controller.getEstablishments);
