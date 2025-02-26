import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

// Función para encriptar la contraseña
const hashPassword = (password) => bcrypt.hashSync(password, 10);

// Función para generar usuarios mockeados
export const generateMockUsers = (numUsers = 50) => {
  return Array.from({ length: numUsers }, () => ({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashPassword("coder123"), // Contraseña encriptada
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [],
  }));
};

// Función para generar mascotas mockeadas
export const generateMockPets = (numPets = 50) => {
  return Array.from({ length: numPets }, () => ({
    name: faker.animal.dog(),
    species: faker.helpers.arrayElement(["dog", "cat", "bird", "reptile"]),
    age: faker.number.int({ min: 1, max: 15 }),
    owner: null,
  }));
};
