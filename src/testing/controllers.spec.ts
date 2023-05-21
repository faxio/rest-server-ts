import axios from "axios";
const url = "http://localhost:8000";

// Requisito -> levantar el servidor Antes de poder correr estas pruebas

describe("GET / seed", () => {
  test("Cargar los datos de prueba", async () => {
    const { data } = await axios.get(url + "/seed");
    expect(data.ok).toBe(true);
  });
});

describe("POST/ users", () => {
  test("Registrar nuevo usuario", async () => {
    const { data } = await axios.post(url + "/api/usuarios/", {
      name: "userPrueba",
      email: "userTest@test2.com",
      password: "esUnSecreto",
    });
    expect(data.ok).toBe(true);
  });
});
