import express from "express";
import mongoose from "mongoose";
import mockRouter from "./routes/mocks.router.js";
import swaggerDocs from "./config/swagger.js";

swaggerDocs(app);

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mockingDB")
  .then(() => console.log("🟢 Conectado a MongoDB"))
  .catch((err) => console.error("🔴 Error en MongoDB:", err));

app.use("/api/mocks", mockRouter);

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
