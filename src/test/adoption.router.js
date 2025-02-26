import request from "supertest";
import app from "../server.js";

describe("Pruebas funcionales para adoption.router.js", () => {
  test("Debe obtener todas las adopciones", async () => {
    const response = await request(app).get("/api/adoption");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("Debe obtener una adopción por ID", async () => {
    const adoptionId = "123456789"; // ID válido de prueba
    const response = await request(app).get(`/api/adoption/${adoptionId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("_id", adoptionId);
  });

  test("Debe crear una nueva adopción", async () => {
    const newAdoption = {
      petId: "abcd1234",
      userId: "efgh5678",
    };
    const response = await request(app).post("/api/adoption").send(newAdoption);
    expect(response.statusCode).toBe(201);
  });
});
