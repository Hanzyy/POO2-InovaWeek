import express, { Router } from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"})

const app = express();

app.use("/api", Router)

if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } else {
    console.log("Fail to load environment");
  }