import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1d" }));

app.get("/health", (_req, res) => res.send("OK"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
