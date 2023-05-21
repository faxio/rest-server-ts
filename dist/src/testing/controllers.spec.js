"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "http://localhost:8000";
// Requisito -> levantar el servidor Antes de poder correr estas pruebas
describe("GET / seed", () => {
    test("Cargar los datos de prueba", () => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get(url + "/seed");
        expect(data.ok).toBe(true);
    }));
});
describe("POST/ users", () => {
    test("Registrar nuevo usuario", () => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.post(url + "/api/usuarios/", {
            name: "userPrueba",
            email: "userTest@test2.com",
            password: "esUnSecreto",
        });
        expect(data.ok).toBe(true);
    }));
});
//# sourceMappingURL=controllers.spec.js.map