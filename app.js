const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      nama: "Umar",
      kelas: "TF-47-03",
    },
    {
      id: 2,
      nama: "Sugito",
      kelas: "TT-42-02",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
