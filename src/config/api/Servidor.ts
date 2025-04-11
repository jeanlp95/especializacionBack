import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutaApiTraductor from "../../app/route/RutaTraductor";

class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configuracion();

    this.app.use("/api/v1", rutaApiTraductor);
  }

  public configuracion(): void {
    this.app.set("PORT", process.env.PORT || 3321);
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  public iniciar(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Backend is running 🚀 in this PORT: ", this.app.get("PORT"));
    });
  }
}

export default Servidor;
