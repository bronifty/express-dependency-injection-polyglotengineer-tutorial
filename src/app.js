// app.js
import express from "express";
import { getVehicles, getPlanets, getStarships } from "./dataservices.js";
import routes from "./apiroutes.js";

const service = () => {
  return Object.freeze({
    getVehicles,
    getPlanets,
    getStarships,
  });
};

const exposeService = async (req, res, next) => {
  req.service = service();
  next();
};

const app = express();

app.get("/", (req, res) => {
  res.send("My index route.");
});

app.use("/api", exposeService, routes);

app.listen(3000, () => {
  console.log("Server is started");
});
