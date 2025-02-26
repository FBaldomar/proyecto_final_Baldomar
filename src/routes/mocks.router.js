import { Router } from "express";
import { generateMockUsers, generateMockPets } from "../utils/mocking.utils.js";
import UserModel from "../models/user.model.js";
import PetModel from "../models/pet.model.js";

const router = Router();

// Endpoint para obtener 50 usuarios simulados
router.get("/mockingusers", async (req, res) => {
  try {
    const users = generateMockUsers(50);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error generando usuarios" });
  }
});

// Endpoint para mover /mockingpets desde el primer desafío
router.get("/mockingpets", async (req, res) => {
  try {
    const pets = generateMockPets(50);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error generando mascotas" });
  }
});

// Endpoint para insertar usuarios y mascotas en la base de datos
router.post("/generateData", async (req, res) => {
  const { users, pets } = req.body;

  if (!users || !pets) {
    return res
      .status(400)
      .json({ error: "Faltan parámetros numéricos 'users' y 'pets'" });
  }

  try {
    const mockUsers = generateMockUsers(users);
    const createdUsers = await UserModel.insertMany(mockUsers);

    const mockPets = generateMockPets(pets).map((pet) => ({
      ...pet,
      owner: faker.helpers.arrayElement(createdUsers)._id, // Asignar dueño aleatorio
    }));

    await PetModel.insertMany(mockPets);

    res.json({ message: `Insertados ${users} usuarios y ${pets} mascotas` });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error insertando datos en la base de datos" });
  }
});

export default router;
