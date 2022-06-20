const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { getInspire } = require('./controller')

app.get("/api/inspire", getInspire);

const { getChallenge } = require('./controller')

app.get("/api/challenge", getChallenge);

app.post("/api/challenge", createGoal);

app.listen(4000, () => console.log("Server running on 4000"));
