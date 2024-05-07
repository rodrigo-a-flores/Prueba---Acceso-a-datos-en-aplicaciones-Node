import express from "express";
import staticFile from "./middleware/middleware.js";
import routes from "./routes/routes.js";
const app = express();
const PORT = process.env.PORT ?? 1234;

staticFile(app);
app.use(express.json());
app.disable("x-powered-by");
app.disable("etag");
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})