const router = require("express").Router();

// db setup (will need to change for deployment)
const pool = require("../../db/dbconfig.js");

// client URL for development (will need to change for deployment)
const CLIENT_URL = "http://localhost:3000/";

// Get a random capital
router.get("/", async (req, res) => {
  try {
    const randomCapital = await pool.query(
      "SELECT * FROM countries WHERE picked = false ORDER BY RANDOM() LIMIT 1"
    );
    res.json(randomCapital.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update the streak of a user
router.put("/updateStreak", async (req, res) => {
  try {
    const { user } = req.body;
    const updateStreak = await pool.query(
      "UPDATE users SET streak = streak + 1 WHERE id = $1",
      [user.id]
    );
    res.json("Streak updated");
  } catch (error) {
    console.error(error.message);
  }
});

// Update the picked status of a capital
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateCapital = await pool.query(
      "UPDATE countries SET picked = true WHERE id = $1",
      [id]
    );
    res.json("Capital updated");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
