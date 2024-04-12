const router = require("express").Router();

// db setup (will need to change for deployment)
const pool = require("../../db/dbconfig.js");

// client URL for development (will need to change for deployment)
const CLIENT_URL = "http://localhost:3000/";

// Get a random capital
// TEST CODE - NOT USED IN DEPLOYMENT - USED FOR TESTING PURPOSES
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

// Get a capital assigned todays date under 'challenge_date'
// DEPLOYMENT CODE - USED IN DEPLOYMENT
router.get("/today", async (req, res) => {
  try {
    const todayCapital = await pool.query(
      "SELECT * FROM countries WHERE challenge_date = CURRENT_DATE"
    );
    res.json(todayCapital.rows[0]);
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

module.exports = router;
