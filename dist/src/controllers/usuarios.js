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
exports.deleteUsuario = exports.putUsuario = exports.loginUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_1.default.findAll();
    res.json({
        usuario,
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `no existe un usuario con el id ${id}`,
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const emailExist = yield usuario_1.default.findOne({
            where: {
                email: body.email,
            },
        });
        if (emailExist) {
            return res.status(400).json({
                msg: `The email ${body.email} exists in bd`,
                ok: false,
            });
        }
        const usuario = usuario_1.default.build(body);
        const salt = bcryptjs_1.default.genSaltSync();
        usuario.set({ password: bcryptjs_1.default.hashSync(body.password, salt) });
        yield usuario.save();
        res.json({
            usuario,
            ok: true,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.postUsuario = postUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const usuarioDB = yield usuario_1.default.findOne({ where: { email: email } });
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: "User does not exist",
            });
        }
        // Revisar contraseña
        const validPassword = bcryptjs_1.default.compareSync(password, usuarioDB.password);
        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: "Email or password is wrong",
            });
        }
        // Generar JWT
        res.json({
            ok: true,
            usuario: usuarioDB,
            //token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.loginUsuario = loginUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `The user with id: ${id} not exists`,
            });
        }
        if (body.password) {
            const salt = bcryptjs_1.default.genSaltSync();
            body.password = bcryptjs_1.default.hashSync(body.password, salt);
        }
        if (body.email) {
            const emailExist = yield usuario_1.default.findOne({
                where: {
                    email: body.email,
                },
            });
            if (emailExist) {
                return res.status(400).json({
                    msg: `The email ${body.email} exists in bd`,
                    ok: false,
                });
            }
        }
        yield usuario.update(body);
        res.json({
            ok: true,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `The user with id: ${id} not exists`,
        });
    }
    try {
        yield usuario.destroy();
        res.json({
            msg: "usuario eliminado",
            id,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map