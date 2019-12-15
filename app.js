/* istanbul ignore file */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import logger from "./config/logger";
import db from "./config/db";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(morgan("dev", { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (request, response) => {
    response.status(200).json({
        status: "success",
        message: "Welcome to Banka-lite."
    });
});

app.all("*", (request, response) => {
    response.status(404).json({
        status: "error",
        message: "This route does not exist."
    });
});

db.on("connected", () => {
    logger.debug(`Connected to database successfully`);
    app.listen(port, () => logger.debug(`Application running on port ${port}`));
});

db.on("error", logger.debug.bind(console, "MongoDB connection error:"));

export default app;
