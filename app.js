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
      namaProvinsi: 'Jawa Barat',
      namaKecamatan: 'Bandung',
      namaDesa: 'Cibiru',
    },
    {
      id: 2,
      namaProvinsi: 'Jawa Timur',
      namaKecamatan: 'Surabaya',
      namaDesa: 'Sukolilo',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
