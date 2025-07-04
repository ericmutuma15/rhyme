const express = require('express');
const db = require('../db.js');
const multer = require('multer');
const { authenticateAdmin } = require('../../middleware/auth.js');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// POST /api/applications - Submit application
router.post('/', upload.array('documents'), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, education, courseId } = req.body;
    const documents = req.files ? req.files.map(f => f.path) : [];
    const result = await db.query(
      `INSERT INTO applicants (first_name, last_name, email, phone, education, course_id, documents, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'Pending') RETURNING *`,
      [firstName, lastName, email, phone, education, courseId, documents]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// GET /api/applications - List applications (admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM applicants');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// GET /api/applications/:id - Get application details (admin only)
router.get('/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM applicants WHERE id = $1', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Application not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch application' });
  }
});

// POST /api/applications/:id/approve - Approve application (admin only)
router.post('/:id/approve', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("UPDATE applicants SET status = 'Approved' WHERE id = $1", [id]);
    res.json({ message: 'Application approved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to approve application' });
  }
});

// POST /api/applications/:id/decline - Decline application (admin only)
router.post('/:id/decline', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("UPDATE applicants SET status = 'Declined' WHERE id = $1", [id]);
    res.json({ message: 'Application declined' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to decline application' });
  }
});

module.exports = router;
