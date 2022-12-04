// requesthandlers.js
async function vehicles(req, res) {
  try {
    const results = await req.service.getVehicles();
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed due to Server error!" });
  }
}

async function planets(req, res) {
  try {
    const results = await req.service.getPlanets();
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed due to Server error!" });
  }
}

async function starships(req, res) {
  try {
    const results = await req.service.getStarships();
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed due to Server error!" });
  }
}

export { vehicles, planets, starships };
