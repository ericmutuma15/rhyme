const express = require('express');
const db = require('../db.js');
const router = express.Router();

// GET /api/courses - List all courses
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM courses');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// GET /api/courses/:id - Get course details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM courses WHERE id = $1', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Course not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

module.exports = router;
