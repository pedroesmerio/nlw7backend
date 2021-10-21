import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.listen(4000, () => console.log(`Server is running on PORT :4000`));
