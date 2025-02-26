import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Adopción de Mascotas",
      version: "1.0.0",
      description: "Documentación de la API de usuarios",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./routes/user.router.js"], // Ruta a los archivos con documentación
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
