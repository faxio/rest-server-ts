import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import seed from "../routes/seed";
import cors from "cors";
import db from "../db/connection";

class Server {
  public app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
    seed: "/seed",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "9000";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.sync();
      //console.log("DB Online");
    } catch (error: any) {
      throw new Error(error);
    }
  }
  // Functions  that are executed before the other routes
  middlewares() {
    // Cors
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json());

    // Carpeta pública
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.seed, seed);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
